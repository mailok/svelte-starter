<script lang="ts">
	import { useBreadcrumbs } from '$lib/breadcrumbs-context.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	const breadcrumbs = useBreadcrumbs();

	onMount(() => {
		breadcrumbs.addItem({
			key: 'clients',
			snippet: breadcrumb
		});
	});
</script>

{#snippet breadcrumb()}
	<span>Clients</span>
{/snippet}
{@render children()}
