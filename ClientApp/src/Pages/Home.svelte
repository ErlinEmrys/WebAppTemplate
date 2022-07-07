<script lang="ts">
	import logo from "~/Assets/Svelte.png";
	import Counter from "~/Components/Counter.svelte";
	import { T } from "~/Utils/Translator";
	import { ThemeToggle } from "svelte-themer";
</script>

<img alt="{$T( '#0#Svelte Logo' )}" h-16rem src={logo} w-16rem/>
<h1 font-100 max-w-14rem mx-auto my-2rem
	 text-6xl text-red-600 uppercase>{$T( '#0#main title' )}</h1>

<Counter/>
<br/>
<ThemeToggle/>

<div gt-lg:(max-w-full mx-4 mx-auto)>
	<p>
		Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.
	</p>

	<p>
		Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for the
		officially
		supported framework, also powered by Vite!
	</p>

	<a href="/about">ABOUT</a>
</div>

<style>
	p {
		/*@apply: max-w-14rem mx-auto my-4rem leading-5;*/
	}
</style>