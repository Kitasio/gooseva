<script lang="ts">
	import Filter from '$lib/components/Filter.svelte';
	import { fade, fly } from 'svelte/transition';
	import Nav from '$lib/components/nav/Nav.svelte';
	import { showFilter } from '$lib/functions/utils';
	import { items } from '$lib/functions/utils';
	import { Image } from 'svelte-aid';
	let lvl1 = [];
	let lvl2 = [];
	let lvl3 = [];

	const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);
</script>

<Nav />
<div>
	<div
		on:click={() => ($showFilter = !$showFilter)}
		class="flex lg:hidden justify-between items-center px-7 py-7 border-b-2 border-black text-sm flex-auto"
	>
		<h1>Навигация по проектам</h1>
		<p class="mt-1">
			<img
				class={$showFilter ? 'rotate-180 transition' : 'transition'}
				src="/images/arrow.svg"
				alt=""
			/>
		</p>
	</div>
	{#if $showFilter}
		<div transition:fly={{ x: -20, duration: 200 }} class="fixed w-full border-black border-t z-10">
			<Filter
				on:lvl1Change={(e) => (lvl1 = e.detail)}
				on:lvl2Change={(e) => (lvl2 = e.detail)}
				on:lvl3Change={(e) => (lvl3 = e.detail)}
			/>
		</div>
	{/if}
	{#key lvl1 || lvl2 || lvl3}
		<div
			in:fade
			class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mt-10"
		>
			{#each items as i, index (index)}
				{#if (i.tags.some( (e) => lvl1.includes(capitalize(e)) ) || !lvl1.length) && (i.tags.some( (e) => lvl2.includes(capitalize(e)) ) || !lvl2.length) && (i.tags.some( (e) => lvl3.includes(capitalize(e)) ) || !lvl3.length)}
					<a class="border-b border-r border-black hover:shadow-border transition duration-200" href={`projects/${index}`}>
						<div class="h-96 {i.classes}">
							<Image src={i.mainImg} classes={`w-full h-full object-cover ${i.classes}`} />
						</div>
						<div class="text-center">{i.title}</div>
					</a>
				{/if}
			{/each}
		</div>
	{/key}
</div>
