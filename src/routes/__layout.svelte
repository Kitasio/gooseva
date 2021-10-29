<script lang="ts">
	import '../app.css';
    import Nav from '$lib/components/Nav.svelte';
</script>

<div class="overflow-x-hidden">
    <Nav />
	<slot />
</div>
