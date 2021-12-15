<script>
	import Nav from '$lib/components/nav/Nav.svelte';
	import { fade } from 'svelte/transition';
	import { Image, Ticker } from 'svelte-aid';
	import { listForTicker } from '$lib/functions/utils';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	let white = true
	onMount(() => {
		const tl = gsap.timeline({repeat: 5})
		tl.to(".img2", {duration: 2,  opacity: 1, delay: 4, onStart: () => white = false})
		tl.to(".img1", {duration: 2,  opacity: 0}, "-=2")
		tl.to(".img3", {duration: 2,  opacity: 1, delay: 4, onStart: () => white = true})
		tl.to(".img2", {duration: 2,  opacity: 0}, "-=2")
		tl.to(".img4", {duration: 2,  opacity: 1, delay: 4, onStart: () => white = false})
		tl.to(".img3", {duration: 2,  opacity: 0}, "-=2")
		tl.to(".img5", {duration: 2,  opacity: 1, delay: 4, onStart: () => white = true})
		tl.to(".img4", {duration: 2,  opacity: 0}, "-=2")
		tl.to(".img6", {duration: 2,  opacity: 1, delay: 4, onStart: () => white = false})
		tl.to(".img5", {duration: 2,  opacity: 0}, "-=2")
		tl.to(".img1", {duration: 2,  opacity: 1, delay: 4, onStart: () => white = true})
		tl.to(".img6", {duration: 2,  opacity: 0}, "-=2")
	});
</script>

<div class="h-screen flex flex-col justify-between">
	<Ticker
		items={listForTicker}
		classWrapper={'fixed flex h-screen items-center z-10 lg:bottom-12 lg:h-auto'}
		classParent={'space-x-1.5 font-bt'}
		classChild={white ? 'inline-block text-white' : 'inline-block'}
		durationMobile={'80s'}
		duration={'80s'}
	/>
	<div class="z-40">
		<Nav {white} />
		{#if white}
			<div in:fade class="p-5 lg:py-16 z-10">
				<img class="w-full" src="/images/logo/goos_white.svg" alt="" />
			</div>
		{:else}
			<div in:fade class="p-5 lg:py-16 z-10">
				<img class="w-full" src="/images/logo/goos.svg" alt="" />
			</div>
		{/if}
	</div>
	{#if white}
		<div in:fade class="p-5 lg:py-16 mb-2 z-10">
			<img class="w-full" src="/images/logo/kom_white.svg" alt="" />
		</div>
	{:else}
		<div in:fade class="p-5 lg:py-16 mb-2 z-10">
			<img class="w-full" src="/images/logo/kom.svg" alt="" />
		</div>
	{/if}

	<div class="grid grid-cols-3 absolute w-full h-full">
		<div class="img1 w-full object-cover h-screen absolute top-0 opacity-1">
			<Image
				srcMobile={'/images/index/1Mobile.jpg'}
				src={'/images/index/1.jpg'}
				alt={'main image'}
				classes={'w-full object-cover h-screen absolute top-0'}
			/>
		</div>
		<div
			class="img2 absolute w-full h-screen flex items-center justify-end overflow-hidden opacity-0"
		>
			<div class="flex flex-col md:flex-row overflow-hidden">
				<Image
					src={'/images/index/2.1.jpg'}
					classes={'w-80 ml-28 mt-20 md:m-0 md:w-auto object-cover'}
				/>
				<Image src={'/images/index/2.2.jpg'} />
			</div>
		</div>
		<img
			src="/images/index/3.jpg"
			alt=""
			class="img3 w-full object-cover h-screen absolute top-0 opacity-0"
		/>
		<div class="img4 absolute w-full h-screen flex items-center justify-center opacity-0">
			<img src="/images/index/4.jpg" alt="" />
		</div>
		<div class="img5 w-full object-cover h-screen absolute top-0 opacity-0">
			<Image
				srcMobile={'/images/index/5Moblie.jpg'}
				src={'/images/index/5.jpg'}
				alt={'main image'}
				classes={'w-full object-cover h-screen absolute top-0'}
			/>
		</div>
		<div class="img6 absolute w-full h-screen pt-16 pl-3 opacity-0">
			<img class="w-56 mt-48 -ml-4 md:-ml-0 md:mt-0" src="/images/index/6.jpg" alt="" />
		</div>
	</div>
</div>
