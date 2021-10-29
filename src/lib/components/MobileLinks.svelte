<script>
    import { fly } from "svelte/transition";
	export let toggled = false;
</script>

{#if toggled}
	<div in:fly={{ x: -20, duration: 200 }} class="lg:hidden h-screen flex flex-col divide-y-2 divide-black justify-between">
		<div class="flex justify-between items-center px-7 text-lg flex-auto">
			<h1>Проекты</h1>
			<p class="mt-1"><img src="/images/arrow.svg" alt=""></p>
		</div>
		<div class="flex justify-between items-center px-7 text-lg flex-auto">
			<h1>Команда</h1>
			<p class="mt-1"><img src="/images/arrow.svg" alt=""></p>
		</div>
		<div class="flex justify-between items-center px-7 text-lg flex-auto">
			<h1>Услуги</h1>
			<p class="mt-1"><img src="/images/arrow.svg" alt=""></p>
		</div>
		<div class="flex justify-between items-center px-7 text-lg flex-auto">
			<h1>Клиенты</h1>
			<p class="mt-1"><img src="/images/arrow.svg" alt=""></p>
		</div>
		<div class="flex justify-between items-center px-7 text-lg flex-auto">
			<h1>Награды</h1>
			<p class="mt-1"><img src="/images/arrow.svg" alt=""></p>
		</div>
		<div class="flex justify-between items-center px-7 text-lg flex-auto">
			<h1>О нас</h1>
			<p class="mt-1"><img src="/images/arrow.svg" alt=""></p>
		</div>
		<div class="flex justify-between items-center px-7 text-lg flex-auto">
			<h1>Контакты</h1>
			<p class="mt-1"><img src="/images/arrow.svg" alt=""></p>
		</div>
	</div>
{/if}
