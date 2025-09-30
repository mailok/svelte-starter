<script lang="ts">
	import { page } from '$app/state';
	import UnderConstruction from '$lib/components/under-construction.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('Client ID from personal-information:', page.params.id);
	});
</script>

<UnderConstruction pageName="Personal Information" />
