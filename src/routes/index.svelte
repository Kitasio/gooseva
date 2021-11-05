<script>
	import Nav from '$lib/components/nav/Nav.svelte';
	import { fade } from 'svelte/transition';
	import { white } from '$lib/functions/utils';
	let item = 1;
	let time;
	let hover = (isWhite, num) => {
		clearTimeout(time);
		time = setTimeout(() => {
			$white = isWhite;
			item = num;
		}, 400);
	};
</script>

<div class="h-screen flex flex-col justify-between">
	<div class="z-40">
			<Nav />
		{#if $white}
			<div in:fade class="p-5 lg:py-16 z-10">
				<img class="w-full" src="/images/logo/goos_white.svg" alt="" />
			</div>
		{:else}
			<div in:fade class="p-5 lg:py-16 z-10">
				<img class="w-full" src="/images/logo/goos.svg" alt="" />
			</div>
		{/if}
	</div>
	{#if $white}
		<div in:fade class="p-5 lg:py-16 mb-10 z-10">
			<img class="w-full" src="/images/logo/kom_white.svg" alt="" />
		</div>
	{:else}
		<div in:fade class="p-5 lg:py-16 mb-10 z-10">
			<img class="w-full" src="/images/logo/kom.svg" alt="" />
		</div>
	{/if}

	{#if item == 1}
		<img
			src="/images/index/1.jpg"
			alt=""
			transition:fade
			class="w-full object-cover h-screen absolute top-0"
		/>
	{:else if item == 3}
		<img
			src="/images/index/3.jpg"
			alt=""
			transition:fade
			class="w-full object-cover h-screen absolute top-0"
		/>
	{:else if item == 5}
		<img
			src="/images/index/5.jpg"
			alt=""
			transition:fade
			class="w-full object-cover h-screen absolute top-0"
		/>
	{/if}
</div>

<div class="grid grid-cols-3 absolute w-full h-5/6 z-50 top-10">
	<div on:mouseenter={() => hover(true, 1)} />
	<div on:mouseenter={() => hover(false, 2)} />
	<div on:mouseenter={() => hover(true, 3)} />
	<div on:mouseenter={() => hover(false, 4)} />
	<div on:mouseenter={() => hover(true, 5)} />
	<div on:mouseenter={() => hover(false, 6)} />
</div>
