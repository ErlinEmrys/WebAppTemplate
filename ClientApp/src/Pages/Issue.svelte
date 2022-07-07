<script lang="ts">
	export let params = {};

	let issueId = params?.id;
</script>

<h1>Current Issue is: {issueId ? issueId : "None"}</h1>