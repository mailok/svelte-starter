<script lang="ts">
	import { Tabs, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { useClientSearch } from './use-client-search.svelte';

	const searchParams = useClientSearch();

	let currentStatus = $derived(searchParams.status);

	function handleStatusChange(status: string) {
		searchParams.update({ status, page: 1 });
	}
</script>

<Tabs value={currentStatus} onValueChange={handleStatusChange}>
	<TabsList>
		<TabsTrigger class="cursor-pointer" value="active">Active</TabsTrigger>
		<TabsTrigger class="cursor-pointer" value="pending">Pending</TabsTrigger>
		<TabsTrigger class="cursor-pointer" value="inactive">Inactive</TabsTrigger>
	</TabsList>
</Tabs>
