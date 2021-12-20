<script>
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { showFilter } from '$lib/functions/utils';
	import Burger from '../Burger.svelte';
	import Bot from './Bot.svelte';
	import BotActive from './BotActive.svelte';
	import TopActive from './TopActive.svelte';
	import Top from './Top.svelte';
	import MobileLinks from '../MobileLinks.svelte';
	let toggled = false;
	let topActive = false;
	let botActive = false;
	export let white = false;

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
{#if $page.path != '/'}
	<div class={toggled ? 'h-screen flex flex-col absolute w-full z-50 bg-white' : ''}>
		<div class="lg:hidden flex justify-between divide-x-2 divide-black border-b-2 border-black">
			<div
				in:fly={{ x: 20, duration: 200 }}
				class="flex font-medium py-2 w-full justify-center items-center"
			>
				{#if $page.params.name}
					<a href="/team">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 fill-current text-black"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 19l-7-7m0 0l7-7m-7 7h18"
							/>
						</svg>
					</a>
				{:else if $page.params.id}
					<a href="/projects">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 fill-current text-black"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 19l-7-7m0 0l7-7m-7 7h18"
							/>
						</svg>
					</a>
				{/if}
				<h1 class="ml-10 font-bt uppercase">gooseva komanda</h1>
			</div>
			<div on:click={() => (toggled = !toggled)} class="px-2">
				<Burger {white} {toggled} />
			</div>
		</div>

		<MobileLinks {toggled} />
	</div>
{:else}
	<div class={toggled ? 'h-screen flex flex-col absolute w-full z-50 bg-white' : ''}>
		<div
			class:white={white && !toggled}
			class="lg:hidden flex justify-between divide-x-2 divide-black border-b-2 border-black"
		>
			{#if toggled}
				<div
					in:fly={{ x: 20, duration: 200 }}
					class="flex font-medium py-2 w-full justify-center items-center"
				>
					<h1 class="ml-10 font-bt uppercase">gooseva komanda</h1>
				</div>
			{:else}
				<div in:fly={{ x: -20, duration: 200 }} class="flex font-medium py-2 w-full items-center">
					<a href="/projects" class="ml-5">Проекты</a>
				</div>
				<div in:fly={{ x: -20, duration: 200 }} class="flex font-medium py-2 w-full items-center">
					<a target="_self" href="/team" class="ml-5">Команда</a>
				</div>
			{/if}
			<div on:click={() => (toggled = !toggled)} class="px-2">
				<Burger {white} {toggled} />
			</div>
		</div>

		<MobileLinks {toggled} />
	</div>
{/if}

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
					<div class:white class="hidden w-full lg:flex justify-between border-b border-black">
						{#if $page.path == '/projects'}
							<div
								class="flex items-center space-x-5 cursor-pointer hover:shadow-border w-2/3 xl:w-3/4 border-black border-r"
								on:click={() => ($showFilter = !$showFilter)}
							>
								<h1 class="ml-5 font-medium whitespace-nowrap">Навигация по проектам</h1>
								<img
									class={$showFilter
										? 'w-4 h-4 mt-1 rotate-90 transition'
										: 'w-4 h-4 mt-1 rotate-180 transition'}
									src="/images/arrow.svg"
									alt=""
								/>
							</div>
						{:else}
							<a
								href="/projects"
								class={white
									? 'flex transition duration-200 hover:shadow-white font-medium py-2 w-full items-center border-r border-white'
									: 'flex transition duration-200 hover:shadow-border font-medium py-2 w-full items-center border-r border-black'}
							>
								<h1 class="ml-5">Проекты</h1>
							</a>
						{/if}
						<div
							class={$page.path == '/'
								? 'w-full lg:flex justify-between'
								: 'w-1/3 xl:w-1/4 lg:flex justify-between border-r border-black'}
							on:click={toggleTop}
						>
							<Top {white} />
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
				<div class="hidden group w-full lg:flex justify-between border-t border-black" class:white>
					{#if $page.path == '/'}
						<div
							class={white
								? 'flex transition duration-200 hover:shadow-white font-medium py-2 w-full items-center'
								: 'flex transition duration-200 hover:shadow-border font-medium py-2 w-full items-center'}
						>
							<a href="/team" class="ml-5 w-full">Команда</a>
						</div>
					{:else}
						<div
							class="flex transition duration-200 hover:shadow-border font-medium py-2 w-2/3 xl:w-3/4 items-center border-r border-black"
						>
							<a href="/" class="ml-5 font-bt uppercase w-full">gooseva komanda</a>
						</div>
					{/if}
					<div
						class={$page.path == '/'
							? 'w-full lg:flex justify-between '
							: 'w-1/3 xl:w-1/4 lg:flex justify-between'}
						on:click={toggleBot}
					>
						<Bot {white} />
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
		@apply divide-white;
	}
</style>
