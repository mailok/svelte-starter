<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import UnderConstruction from '$lib/components/under-construction.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('Client ID from benefits:', page.params.id);
	});

	afterNavigate(() => {
		console.log('Benefits page before navigate');
	});
</script>

<UnderConstruction pageName="Benefits" />
