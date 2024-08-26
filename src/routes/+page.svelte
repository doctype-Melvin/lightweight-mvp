<script>
	// @ts-nocheck

	import { loggedIn } from "$lib/utils/stores";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

	onMount(() => {
		console.log('Home screen mounted')
		if (!$loggedIn) {
			setTimeout(() => {
				goto('/signin')
			}, 2500)
		}
	})

	
	const data = [
		{
			id: 1,
			title: 'Current Session',
			href: '/current'
		},
		{
			id: 2,
			title: 'Browse Templates',
			href: '/templates'
		},
		{
			id: 3,
			title: 'Create New Template',
			href: '/create'
		},
		{
			id: 4,
			title: 'Random Workout Session',
			href: '/random'
		},
		{
			id: 5, 
			title: 'Analytics',
			href: '/analytics'
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
			<h2><a href={`${item.href}`}>{item.title}</a></h2>
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
		grid-template-rows: repeat(auto-fill, 1fr);
		padding: 5px 10px;
		height: 100vh;
		text-align: center;
		gap: 10px;
	}

	.grid-container :first-child {
		grid-column: span 2;
		background-color: aliceblue;
	}
</style>
