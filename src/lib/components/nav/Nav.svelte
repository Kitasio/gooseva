<script>
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { white } from '$lib/functions/utils';
	import Burger from '../Burger.svelte';
	import Bot from './Bot.svelte';
	import BotActive from './BotActive.svelte';
	import TopActive from './TopActive.svelte';
	import Top from './Top.svelte';
	import MobileLinks from '../MobileLinks.svelte';
	let toggled = false;
	let topActive = false;
	let botActive = false;

	const toggleTop = () => {
		botActive = false;
		topActive = !topActive;
	};
	const toggleBot = () => {
		topActive = false;
		botActive = !botActive;
	};
</script>

<!-- MOBILE -->
<div class={toggled ? 'h-screen flex flex-col absolute w-full z-50 bg-white' : ''}>
	<div class="lg:hidden flex justify-between divide-x-2 divide-black border-b-2 border-black">
		{#if toggled}
			<div
				in:fly={{ x: 20, duration: 200 }}
				class="flex font-medium py-2 w-full justify-center items-center"
			>
				<h1 class="ml-10 font-bt uppercase">gooseva komanda</h1>
			</div>
		{:else}
			<div in:fly={{ x: -20, duration: 200 }} class="flex font-medium py-2 w-full items-center">
				<h1 class="ml-5">Проекты</h1>
			</div>
			<div in:fly={{ x: -20, duration: 200 }} class="flex font-medium py-2 w-full items-center">
				<h1 class="ml-5">Команда</h1>
			</div>
		{/if}
		<div on:click={() => (toggled = !toggled)} class="px-2">
			<Burger {toggled} />
		</div>
	</div>

	<MobileLinks {toggled} />
</div>

<!-- DESKTOP -->
<div>
	<div class="fixed w-full z-10">
		{#if topActive}
			<div transition:fly={{ y: -50, duration: 200 }}>
				<div class="hidden lg:inline">
					<div class="hidden w-full lg:flex justify-between">
						<div class="hidden xl:flex flex-none font-medium w-2/12 xl:w-1/12 items-start">
							<h1 class="pl-5 w-full border-black border-b py-2 bg-white">Проекты</h1>
						</div>
						<div class="w-full lg:flex justify-between" on:click={toggleTop}>
							<TopActive />
						</div>
					</div>
				</div>
			</div>
		{:else}
			<div in:fly={{ delay: 200 }}>
				<div class="hidden lg:inline">
					<div
						class:white={$white}
						class="hidden w-full lg:flex justify-between border-b border-black"
					>
						<a
							href="/projects"
							class={$white
								? 'flex transition duration-200 hover:shadow-white font-medium py-2 w-full items-center border-r border-white'
								: 'flex transition duration-200 hover:shadow-border font-medium py-2 w-full items-center border-r border-black'}
						>
							<h1 class="ml-5">Проекты</h1>
						</a>
						<div
							class={$page.path == '/'
								? 'w-full lg:flex justify-between '
								: 'w-1/3 lg:flex justify-between divide-x divide-black'}
							on:click={toggleTop}
						>
							<Top />
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<div class="fixed bottom-0 w-full z-50">
		{#if botActive}
			<div transition:fly={{ y: 50, duration: 200 }} on:click={toggleBot}>
				<BotActive />
			</div>
		{:else}
			<div class="hidden lg:inline w-full bottom-0" in:fly={{ delay: 200 }}>
				<div
					class="hidden group w-full lg:flex justify-between border-t border-black"
					class:white={$white}
				>
					<div
						class={$white
							? 'flex transition duration-200 hover:shadow-white font-medium py-2 w-full items-center'
							: 'flex transition duration-200 hover:shadow-border font-medium py-2 w-full items-center'}
					>
						{#if $page.path == '/'}
							<a href="/team" class="ml-5 w-full">Команда</a>
						{:else}
							<a href="/" class="ml-5 font-bt uppercase w-full">gooseva komanda</a>
						{/if}
					</div>
					<div
						class={$page.path == '/'
							? 'w-full lg:flex justify-between '
							: 'w-1/3 lg:flex justify-between divide-x'}
						on:click={toggleBot}
					>
						<Bot />
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.white {
		@apply text-white;
		@apply border-white;
	}
</style>
