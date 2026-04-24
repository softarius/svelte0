<script>
	let { data } = $props();
</script>

<h1>Направления подготовки</h1>

{#snippet row(/** @type {{ code: any; name: any; profile: String; }} */ item)}
	<tr>
		<td>{item.code}</td>
		<td><a href="/schola/np/{item.code}">{item.name}</a></td>
		<td>{item.profile}</td>
	</tr>
{/snippet}

<table class="table table bordered">
	<thead>
		<tr>
			<th>Код</th>
			<th>Направление</th>
			<th>Специализация</th>
		</tr>
	</thead>
	<tbody>
		{#each data.nps as np}
			{@render row(np)}
		{/each}
	</tbody>
</table>
