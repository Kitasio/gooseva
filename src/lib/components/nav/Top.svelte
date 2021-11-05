<script>
	import { white } from '$lib/functions/utils';
</script>

<span
	class={$white ? "flex transition border-white border-r duration-200 hover:shadow-white pl-5 cursor-pointer w-1/3 font-medium py-2 items-center pr-10" : "flex transition border-black border-r duration-200 hover:shadow-border pl-5 cursor-pointer w-1/3 font-medium py-2 items-center pr-10"}
>
	О нас
</span>
<span
	class={$white ? "flex transition border-white border-r duration-200 hover:shadow-white pl-5 cursor-pointer w-1/3 font-medium py-2 items-center pr-10" : "flex transition border-black border-r duration-200 hover:shadow-border pl-5 cursor-pointer w-1/3 font-medium py-2 items-center pr-10"}
>
	Услуги
</span>
<span
	class:white={$white}
	class={$white ? "flex transition duration-200 hover:shadow-white pl-5 cursor-pointer w-1/3 font-medium py-2 items-center pr-10" : "flex transition duration-200 hover:shadow-border pl-5 cursor-pointer w-1/3 font-medium py-2 items-center pr-10"}
>
	Контакты
</span>

<style>
	.white {
		@apply text-white;
		@apply border-white;
	}
</style>
