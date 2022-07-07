<script lang="ts">
	import { count } from "~/Stores/CounterStore";
	import { T } from "~/Utils/Translator";

	const Increment = () =>
	{
		count.update( n => n + 1 );
	};
</script>

<button on:click={Increment}>
	{$T( '#0#Clicks:' )}
	{$count}
</button>

<style>
	button {
		font-family: inherit;
		font-size: inherit;
		padding: 1em 2em;
		color: #ff3e00;
		background-color: var(--theme-colors-primary);
		border-radius: 2em;
		border: 2px solid rgba(255, 62, 0, 0);
		outline: none;
		width: 200px;
		font-variant-numeric: tabular-nums;
		cursor: pointer;
	}

	button:focus {
		border: 2px solid #ff3e00;
	}

	button:active {
		background-color: rgba(255, 62, 0, 0.2);
	}
</style>
