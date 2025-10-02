<script lang="ts">
	import { page } from '$app/state';
	import ClientList from './client-list.svelte';
	import Insights from './insights.svelte';
	import SearchFilter from './search-filter.svelte';
	import StatusFilter from './status-filter.svelte';
	import ViewModeToggle from './view-mode-toggle.svelte';

	let clientsDataPromise = $derived(page.data.clientsData);
</script>

<div class="flex size-full flex-col gap-6 p-6">
	<Insights />
	<div class="@container flex items-center justify-between">
		<div class="flex items-center gap-4">
			<StatusFilter />
			<SearchFilter />
		</div>
		<ViewModeToggle />
	</div>
	<ClientList {clientsDataPromise} />
	<!-- <ClientsPagination /> -->
</div>
