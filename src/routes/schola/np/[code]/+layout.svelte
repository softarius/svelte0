<script>
	let { data, children } = $props();
</script>

<div class="layout">
	<main>
		{@render children()}
	</main>

	<aside>
		<h2>Все направления:</h2>
		<div class="dropdown">
			<ul>
				{#each data.nps as { code, name }}
					<li class="dropdown-item">
						<a href="/schola/np/{code}">{code} {name}</a>
					</li>
				{/each}
			</ul>
		</div>
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
