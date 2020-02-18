<script>
	export let api_url;
	export let join_code;

	let visible = false;
	let showOwner = false;
	let ownerId = null;
	let timeInMinutes = null;
	let interval = null;
	let timeEnd = null;
	let timeLeft = "00:00:00";

	let members_raw = [];
	$: members = showOwner
		? members_raw
		: members_raw.filter(m => m.id !== ownerId)

	fetch_stats()

	function setTimeLeft() {
		let time = prompt("Countdown in minutes:")
		let digits = time.replace(/[^0-9]/g, "")
		timeInMinutes = parseInt(digits)
		timeEnd = Date.now() + timeInMinutes * 60 * 1000
		updateTimeLeftAndLeaderboard()

		clearInterval(interval)
		interval = setInterval(updateTimeLeftAndLeaderboard, 1000)
	}

	let updatedNTimes = 0;
	function updateTimeLeftAndLeaderboard() {
		let left = timeEnd - Date.now();
		if (left <= 0) {
			timeLeft = "00:00:00"
			clearInterval(interval)
			return
		}
		var hh = Math.floor(left / 1000 / 60 / 60)
		left -= hh * 1000 * 60 * 60
		var mm = Math.floor(left / 1000 / 60)
		left -= mm * 1000 * 60
		var ss = Math.floor(left / 1000)
		left -= ss * 1000
		timeLeft = `${zeroPad(hh)}:${zeroPad(mm)}:${zeroPad(ss)}`

		// do not hammer API, fetch every
		// - minute when more then 5 minutes left
		// - 10 seconds last five minutes
		// - every second last minute
		if (mm >= 5 && (updatedNTimes % 60) === 0) {
			fetch_stats()
		} else if (mm < 5 && mm >= 1 && (updatedNTimes % 10) === 0) {
			fetch_stats()
		} else if (mm === 0) {
			fetch_stats()
		}

		updatedNTimes += 1;
	}
	function zeroPad(n) {
		return ("0" + n).substr(-2)
	}

	async function fetch_stats() {
		let response = await fetch(api_url)
		let document = await response.json()
		ownerId = document.owner_id;
		let entries = Object.values(document.members)
		entries.sort((a, b) => b.stars - a.stars)
		members_raw = entries
	}
</script>

<button class="enable" on:click={() => visible = !visible}>
	{visible ? "Hide" : "Show"} leaderboard
</button>

{#if visible}
<button class="owner" on:click={() => showOwner = !showOwner}>
	{showOwner ? "Hide" : "Show"} owner
</button>

<button class="timeleft" on:click={setTimeLeft}>
	Set countdown
</button>

<main>
	<h1>Join code: {join_code}</h1>
	<p>Time left: {timeLeft}</p>

	<ol>
	{#each members as member}
		<li>{member.name} - {member.stars}</li>
	{/each}
	</ol>
</main>
{/if}

<style>
	button.enable {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 2;
		height: 20px;
	}
	button.owner {
		position: absolute;
		top: 20px;
		right: 0;
		z-index: 2;
		height: 20px;
	}
	button.timeleft {
		position: absolute;
		top: 40px;
		right: 0;
		z-index: 2;
		height: 20px;
	}
	main {
		font-size: 2em;
		color: black;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		min-height: 100vh;
		text-align: center;
		padding: 1em;
		background-color: white;
	}

	h1 {
		text-transform: uppercase;
		font-family: 'Courier New', Courier, monospace;
		font-size: 2em;
		display: inline;
	}

	li {
		font-weight: 300;
	}
</style>
