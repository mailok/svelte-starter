<script lang="ts">
	import { useBreadcrumbs } from '$lib/breadcrumbs.svelte';
	import {
		Breadcrumb,
		BreadcrumbList,
		BreadcrumbSeparator
	} from '$lib/components/ui/breadcrumb/index.js';

	const breadcrumbs = useBreadcrumbs();
</script>

<Breadcrumb>
	<BreadcrumbList>
		{#each breadcrumbs.items as item, i}
			{@render item.snippet()}
			{#if i < breadcrumbs.items.length - 1}
				<BreadcrumbSeparator />
			{/if}
		{/each}
	</BreadcrumbList>
</Breadcrumb>
