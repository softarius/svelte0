<script>
	let { data } = $props();
</script>
<a href="./">Все направления</a>
<h1>{data.post.code} {data.post.name}</h1>
<div>{@html data.post.PROFILE}</div>