<script lang="ts">
	import { page } from '$app/state';
	import { useBreadcrumbs } from '$lib/breadcrumbs.svelte';
	import { BreadcrumbItem, BreadcrumbLink } from '$lib/components/ui/breadcrumb/index.js';
	import UnderConstruction from '$lib/components/under-construction.svelte';

	const breadcrumbs = useBreadcrumbs();
	const crumb = breadcrumbs.register({
		href: `/app/clients/${page.params.id}/benefits`,
		snippet: breadcrumb
	});
</script>

{#snippet breadcrumb()}
	<BreadcrumbItem>
		<BreadcrumbLink href={crumb.href}>Benefits</BreadcrumbLink>
	</BreadcrumbItem>
{/snippet}
<UnderConstruction pageName="Benefits" />
