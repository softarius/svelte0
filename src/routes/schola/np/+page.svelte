<script>
	let { data } = $props();
</script>

<h1>Направления подготовки</h1>

<ul>
	{#each data.nps as { code, name }}
		<li><a href="/schola/np/{code}">{code} {name}</a></li>
	{/each}
</ul> 