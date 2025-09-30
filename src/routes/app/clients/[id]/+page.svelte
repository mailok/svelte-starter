<script lang="ts">
	import { page } from '$app/state';
	import UnderConstruction from '$lib/components/under-construction.svelte';

	// Console log del ID del cliente
	$effect(() => {
		console.log('Client ID from main page:', page.params.id);
	});
</script>

<UnderConstruction pageName="Client Dashboard" />
