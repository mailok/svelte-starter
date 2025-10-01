<script lang="ts">
	import { useBreadcrumbs } from '$lib/breadcrumbs.svelte';
	import { BreadcrumbItem, BreadcrumbLink } from '$lib/components/ui/breadcrumb/index.js';

	let { children } = $props();

	const breadcrumbs = useBreadcrumbs();
	const crumb = breadcrumbs.register({
		href: '/app/clients',
		snippet: breadcrumb
	});
</script>

{#snippet breadcrumb()}
	<BreadcrumbItem>
		<BreadcrumbLink href={crumb.href}>Clients</BreadcrumbLink>
	</BreadcrumbItem>
{/snippet}
{@render children()}
