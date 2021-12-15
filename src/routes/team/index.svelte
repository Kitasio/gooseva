<script lang="ts">
	import Nav from '$lib/components/nav/Nav.svelte';
	import { white } from '$lib/functions/utils';
import { onMount } from 'svelte';

	import { Scroller } from 'svelte-aid';
	let items = [
		{ text: 'Анна Гусева', img: 'https://picsum.photos/1000/201', link: '/team/gooseva' },
		{ text: 'Тая Азбука', img: 'https://picsum.photos/1000/202', link: '/team/azbuka' },
		{ text: 'Имя Фамилия', img: 'https://picsum.photos/1000/203', link: '/team/name' },
		{ text: 'Имя Фамилия', img: 'https://picsum.photos/1000/204', link: '/team/name' },
		{ text: 'Имя Фамилия', img: 'https://picsum.photos/1000/205', link: '/team/name' },
		{ text: 'Имя Фамилия', img: 'https://picsum.photos/1000/206', link: '/team/name' },
		{ text: 'Имя Фамилия', img: 'https://picsum.photos/1000/207', link: '/team/name' },
		{ text: 'Имя Фамилия', img: 'https://picsum.photos/1000/208', link: '/team/name' },
		{ text: 'Имя Фамилия', img: 'https://picsum.photos/1000/209', link: '/team/name' }
	];

	onMount(() => {
		$white = false
	})
</script>

<div class="top-0 h-5 w-5 relative hidden h-full mx-5" />

<div class="top-0 fixed w-full z-10">
	<Nav />
</div>
<Scroller {items} parentClass={'py-10'} wrapperClass={'lg:hidden'} />
