<script>
	import { fly } from 'svelte/transition';
    import { cubicIn } from 'svelte/easing'
	import Burger from './Burger.svelte';
	import MobileLinks from './MobileLinks.svelte';
	let toggled = false;
	let infoHovered = false;
</script>

<!-- MOBILE -->
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

<!-- DESKTOP -->
<div class="hidden lg:inline">
	<div class="hidden group w-full lg:flex justify-between divide-x-2 divide-black border-b-2 border-black">
		<div
			class={infoHovered
				? 'flex font-medium py-2 w-2/12 xl:w-1/12 transition-all items-center'
				: 'flex font-medium py-2 w-full transition-all items-center'}
		>
			<h1 class="ml-5">Проекты</h1>
		</div>
		<span
			on:click={() => (infoHovered = !infoHovered)}
			class="flex pl-5 cursor-pointer w-1/3 font-medium py-2 items-center pr-10"
		>
			О нас
		</span>
		<span
			on:click={() => (infoHovered = !infoHovered)}
			class="flex pl-5 cursor-pointer w-1/3 font-medium py-2 items-center pr-10"
		>
			Услуги
		</span>
		<span
			on:click={() => (infoHovered = !infoHovered)}
			class="flex pl-5 cursor-pointer w-1/3 font-medium py-2 items-center pr-10"
		>
			Контакты
		</span>
	</div>
	{#if infoHovered}
		<div transition:fly={{  x: 500, easing: cubicIn, duration: 200 }} class="w-full flex absolute h-4/6">
			<div class="flex font-medium py-2 w-2/12 xl:w-1/12 transition-all items-center" />
			<div class="w-1/3 pl-5 pt-10 border-l-2 border-b-2 border-black whitespace-pre-line text-sm">
                GOOSEVA KOMANDA —
профессиональная команда стилистов, 
художников по костюму и ассистентов 
под руководством Анны Гусевой.


Мы разрабатываем концепции съемок, 
собираем нужный коллектив под проект 
или сотрудничаем с вашей командой. 
Продумываем стиль и образы, создаем 
костюмы для героев в рекламе, видео роликах, 
музыкальных клипах и модных журналах. 
А также оказываем услуги персонального 
стайлинга. Специалисты нашей команды — 
это сильный творческий коллектив, где каждый
обладает художественным вкусом, большой
экспертизой в области моды и психологии,
способностью быстро реагировать
и находить альтернативные решения. 

            </div>

			<div class="w-1/3 pl-5 pt-10 border-l-2 border-b-2 border-black whitespace-pre-line text-sm">
                Коммерческие услуги

Креатив: 
полная разработка концепции съемки (от 50 000) 
разработка стиля и образов (от 30 000)
Стиль: 
стилизация луков для фото и видео — съемки (от 30 000)
мероприятия или другого случая (от 25 000)
Ассистент стилиста на съемке: 
ассистент стилиста: подготовка к съемке, работа на площадке, развоз (от 10 000 )
работа костюмера (от 6 000 ) 
Создание костюмов:
разработка одного костюма (от 30000)
изготовление рассчитывается индивидуально под задачу  

Смена специалиста — 12 часов. Рабочие часы сверх смены считаются как переработки и оплачиваются от 500 руб. / час (ассистент), от 1000 руб. / час (стилист)


Частные услуги

Разбор гардероба: оценка и редактирование гардероба, составление галереи образов и их систематизация, координация починки и химчистки вещей
Персональный шоппинг: шоппинг со стилистом  согласно индивидуально разработанному плану, составление галереи образов, встраивание образов в гардероб клиента, онлайн-сопровождение 
Подбор / создание костюмов на мероприятие 


            </div>
			<div class="w-1/3 pl-5 pt-10 border-l-2 border-b-2 border-black whitespace-pre-line text-sm">
                Анна Гусева 
+79099505999
gooseva.style@gmail.com
 
Instagram
@guseva_stylist
@gooseva_komanda


Если вы хотите присоединиться к нашей команде, поделиться новостями или просто познакомиться с нами, напишите на goosevastyle@gmail.com
            </div>
		</div>
	{/if}
</div>
