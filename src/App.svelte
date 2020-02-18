<script>
	export let api_url;
	export let join_code;

	let visible = false;
	let showOwner = false;
	let ownerId = null;

	let members_raw = [];
	$: members = showOwner
		? members_raw
		: members_raw.filter(m => m.id !== ownerId)

	// setInterval(fetch_stats, 10 * 1000)

	fetch_stats();

	async function fetch_stats() {
		let response = await fetch(api_url)
		let document = await response.json()
		ownerId = document.owner_id;
		let entries = Object.values(document.members)
		entries.sort((a, b) => b.stars - a.stars)
		members_raw = entries
	}
</script>

<button id="enable" on:click={() => visible = !visible}>
	{visible ? "Hide" : "Show"} leaderboard
</button>

{#if visible}
<main>
	<h1>Join code: {join_code}</h1>
	<button id="owner" on:click={() => showOwner = !showOwner}>
		{showOwner ? "Hide" : "Show"} owner
	</button>

	<ol>
	{#each members as member}
		<li>{member.name} - {member.stars}</li>
	{/each}
	</ol>
</main>
{/if}

<style>
	#enable {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 2;
		height: 20px;
	}
	#owner {
		position: absolute;
		top: 20px;
		right: 0;
		z-index: 2;
		height: 20px;
	}
	main {
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
		font-size: 4em;
		font-weight: 300;
		display: inline;
	}

	li {
		font-size: 2em;
		font-weight: 300;
	}
</style>
