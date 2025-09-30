<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		console.log('Client ID from layout:', page.params.id);
	});
</script>

{@render children()}
