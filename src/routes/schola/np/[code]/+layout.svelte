<script>
	let { data, children } = $props();
</script>

<div class="layout">
	<main>
		{@render children()}
	</main>
	<aside>
		<h2>Все направления:</h2>
		<ul>
			{#each data.nps as { code, name }}
				<li>
					<a href="/schola/np/{code}">{code} {name}</a>
				</li>
			{/each}
		</ul>
	</aside>
</div>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 32em;
		}
	}
</style>
