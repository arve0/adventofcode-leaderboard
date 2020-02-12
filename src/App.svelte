<script>
	export let api_url;
	export let join_code;
	let stats_promise = fetch_stats();

	// setInterval(fetch_stats, 10 * 1000)

	async function fetch_stats() {
		console.log("fetching", api_url)
		let response = await fetch(api_url)
		let document = await response.json()
		let members = Object.values(document.members)
			// .filter(m => m.id !== document.owner_id)
		members.sort((a, b) => b.stars - a.stars)
		return members
	}
</script>

<main>
	<h1>Join code: {join_code}</h1>

	{#await stats_promise then stats}
	<ol>
	{#each stats as member}
		<li>{member.name} - {member.stars}</li>
	{/each}
	</ol>
	{/await}
</main>

<style>
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
</style>
