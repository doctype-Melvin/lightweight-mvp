<script>
	// @ts-nocheck

	import { loggedIn } from "$lib/utils/stores";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import MenuCard from "$lib/components/MenuCard/MenuCard.svelte";

	onMount(() => {
		console.log('Home screen mounted')
		if (!$loggedIn) {
			setTimeout(() => {
				goto('/signin')
			}, 2000)
		}
	})

	
	const data = [
		{
			id: 1,
			title: 'Feature Card - Default: Current Workout Session',
			href: '/current'
		},
		{
			id: 2,
			title: 'Templates',
			href: '/templates'
		},
		{
			id: 3,
			title: 'Random Workout Session',
			href: '/random'
		},
		{
			id: 4,
			title: 'Timer',
			href: '/timer'
		},
		{
			id: 5, 
			title: 'Analytics',
			href: '/analytics'
		},
		{
			id: 6,
			title: 'Log other activity',
			href: '/misc-log'
		}
	]


</script>

<svelte:head>
	<title>Lightweight!</title>
	<meta name="description" content="Lightweight MVP" />
</svelte:head>

<section>
	{#if $loggedIn}
	<div class="grid-container">
		{#each data as item}
		<div>
			<MenuCard href={item.href} title={item.title} />
		</div>
		{/each}
	</div>
	{/if}
	{#if !$loggedIn}
		<h2>Please sign in to continue</h2>
	{/if}
</section>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr .75fr .75fr .5fr;
		padding: 5px 10px;
		height: 100vh;
		text-align: center;
		gap: 10px;
	}
	
	.grid-container div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.grid-container :first-child {
		grid-column: span 2;
		background-color: aliceblue;
	}

	.grid-container :last-child {
		grid-column: span 2;
		background-color: #dcebab;
	}
</style>
