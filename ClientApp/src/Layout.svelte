<script lang="ts">
	import Router from "page";
	import Home from "~/Pages/Home.svelte";
	import About from "~/Pages/About.svelte";
	import Issue from "~/Pages/Issue.svelte";

	let page;
	let params;

	Router( "/", () => ( page = Home ) );
	Router( "/issue", () => ( page = Issue ) );
	Router( "/issue/:id", ( ctx, next ) =>
	{
		params = ctx.params;
		next();
	}, () => ( page = Issue ) );
	Router( "/about", () => ( page = About ) );

	Router.start();
</script>

<header>

</header>

<nav>

</nav>

<main mx-auto text-center>
	{#if params}
		<svelte:component params="{params}" this="{page}"/>
	{:else}
		<svelte:component this="{page}"/>
	{/if}
</main>

<footer>

</footer>