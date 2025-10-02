<script lang="ts">
	import SearchInput from '$lib/components/search-input.svelte';
	import { Debounced } from 'runed';
	import { useClientSearch } from './use-client-search.svelte';

	const searchParams = useClientSearch();

	let searchInput = $state(searchParams.search);
	const debounced = new Debounced(() => searchInput, 500);

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement;
		searchInput = input.value;
	}

	$effect(() => {
		if (debounced.current !== searchParams.search) {
			searchParams.update({ search: debounced.current });
		}
	});
</script>

<div class="hidden items-center space-x-2 @lg:flex">
	<SearchInput autofocus placeholder="Search by name" value={searchInput} oninput={handleInput} />
</div>
