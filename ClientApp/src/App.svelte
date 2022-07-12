<script lang="ts">
	import LoadingAnimation from "~/Components/LoadingAnimation.svelte";
	import { TranslationsLoading } from "~/Utils/Translator";
	import { ThemeWrapper } from "svelte-themer";
	import { Themes } from "~/Themes";
	import Layout from "~/Layout.svelte";
</script>

<ThemeWrapper themes="{Themes}">
	{#if $TranslationsLoading}
		<LoadingAnimation/>
	{:else}
		<Layout/>
	{/if}
</ThemeWrapper>
<div style="display: none"></div>