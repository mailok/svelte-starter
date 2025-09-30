<script lang="ts">
	import { page } from '$app/state';
	import UnderConstruction from '$lib/components/under-construction.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('Client ID from medical-information:', page.params.id);
	});
</script>

<UnderConstruction pageName="Medical Information" />
