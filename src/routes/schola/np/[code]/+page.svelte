<script>
	let { data } = $props();
</script>

<a href="./">Все направления</a>
<h1>{data.np.code} {data.np.name} (<code>{data.np.short_name}</code>)</h1>
<div>{@html data.np.profile}</div>
