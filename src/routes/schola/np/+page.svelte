<script>
	let { data } = $props();
</script>

<h1>Направления подготовки</h1>

{#snippet row(/** @type {{ code: any; name: any; profile: String; }} */ item)}
	<tr>
		<td>{item.code}</td>
		<td><a href="/schola/np/{item.code}">{item.name}</a></td>
		<td>{item.profile}</td>
		<td>{item.edu_level}</td>
	</tr>
{/snippet}

<table class="table table-sm table-bordered table-hover">
	<thead>
		<tr>
			<th>Код</th>
			<th>Направление</th>
			<th>Специализация</th>
			<th>Уровень образования</th>
		</tr>
	</thead>
	<tbody>
		{#each data.nps as np}
			{@render row(np)}
		{/each}
	</tbody>
</table>
