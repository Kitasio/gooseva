<script lang="ts">
	import { items } from '$lib/functions/utils';
	import { page } from '$app/stores';
	import { Image } from 'svelte-aid';
	import Nav from '$lib/components/nav/Nav.svelte';

	let id = $page.params.id;
</script>

<Nav />
<div class="my-10 mx-10 space-y-2">
	<h1 class="font-bt font-thin text-2xl">{items[id].title}</h1>
	<div class="flex font-light flex-wrap">
		{#each items[id].tagNames as tag, index (index)}
			<span class="mr-1">#{tag}</span>
		{/each}
	</div>
</div>

<div class="mx-10 space-y-5">
	{#each items[id].images as i, index (index)}
		<Image src={i} />
	{/each}
</div>
