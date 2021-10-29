<script>
    import { fly } from "svelte/transition";
	export let toggled = false;
</script>

<div class="cursor-pointer">
	{#if toggled}
		<div in:fly="{{ x: 20, duration: 200 }}" class="m-3">
			<div class="w-7 text-center text-sm">X</div>
		</div>
	{:else}
		<div class="pt-0.5">
			<div in:fly="{{ x: -20, duration: 200 }}" class="space-y-1.5 m-3">
				<div class="w-7 h-0.5 bg-black" />
				<div class="w-7 h-0.5 bg-black" />
				<div class="w-7 h-0.5 bg-black" />
			</div>
		</div>
	{/if}
</div>
