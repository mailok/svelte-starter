<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import { useClientSearch } from './use-client-search.svelte';

	const searchParams = useClientSearch();

	let searchInput = $derived(searchParams.search);

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement;
		searchParams.update({ search: input.value });
	}
</script>

<div class="hidden items-center space-x-2 @lg:flex">
	<Input placeholder="Search by name" value={searchInput} oninput={handleInput} />
</div>
