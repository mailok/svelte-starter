<script lang="ts">
	import { page } from '$app/state';
	import { useBreadcrumbs } from '$lib/breadcrumbs.svelte';
	import { BreadcrumbItem, BreadcrumbLink } from '$lib/components/ui/breadcrumb/index.js';

	let { children } = $props();

	const breadcrumbs = useBreadcrumbs();
	const crumb = breadcrumbs.register({
		href: `/app/clients/${page.params.id}`,
		snippet: breadcrumb
	});
</script>

{#snippet breadcrumb()}
	<BreadcrumbItem>
		<BreadcrumbLink href={crumb.href}>{page.params.id}</BreadcrumbLink>
	</BreadcrumbItem>
{/snippet}
{@render children()}
