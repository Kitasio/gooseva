<script lang="ts">
	import { items } from '$lib/data';
	import { page } from '$app/stores';
	import { Image } from 'svelte-aid';
	import Player from '$lib/components/Player.svelte';
	import Nav from '$lib/components/nav/Nav.svelte';
	import Youtube from '$lib/components/Youtube.svelte';

	let id = $page.params.id;
</script>

<Nav />
<div class="lg:grid grid-cols-4">
	<div
		class="mt-10 lg:my-10 p-5 lg:mx-0 col-span-1 lg:flex flex-col justify-between lg:border-r border-black"
	>
		<div class="lg:mt-5 hidden lg:flex justify-between">
			<a
				href="/projects/{parseInt(id) == 0 ? items.projects.length - 1 : parseInt(id) - 1}"
				rel="external"
			>
				<div class="flex space-x-3 items-center cursor-pointer">
					<img class="w-5 h-5" src="/images/arrow-left.svg" alt="" />
					<p class="font-light">Назад</p>
				</div>
			</a>
			<a
				href="/projects/{parseInt(id) + 1 >= items.projects.length ? '0' : parseInt(id) + 1}"
				rel="external"
			>
				<img class="w-5 h-5 cursor-pointer" src="/images/arrow.svg" alt="" />
			</a>
		</div>
		<div class="space-y-1 pb-5">
			<h1 class="font-bt font-thin text-2xl">{items.projects[id].title}</h1>
			<div class="flex font-light flex-wrap">
				{#each items.projects[id].tagNames as tag, index (index)}
					<span class="mr-1">{tag}</span>
				{/each}
			</div>
		</div>
	</div>

	{#if items.projects[id].video}
		<div class="p-10 pb-20 xl:px-20 2xl:px-32 col-span-3 lg:h-screen flex">
			<div class="w-full self-end">
				<Youtube id={items.projects[id].video} />
			</div>
		</div>
	{:else if items.projects[id].localVideo}
		<div class="p-10 pb-20 xl:px-20 2xl:px-32 col-span-3 lg:h-screen flex">
			<div class="w-full self-end">
				<Player src={items.projects[id].localVideo} />
			</div>
		</div>
	{:else}
		<div
			class="p-5 lg:py-10 space-y-5 col-span-3 lg:overflow-scroll lg:h-screen lg:max-w-screen-lg lg:mx-auto w-full"
		>
			{#each items.projects[id].images as i, index (index)}
				<div class="mx-5 mb-10">
					<Image src={i} classes={'mx-auto'} />
				</div>
			{/each}
		</div>
	{/if}
</div>
