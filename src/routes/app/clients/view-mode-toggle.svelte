<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import LayoutGridIcon from '@lucide/svelte/icons/layout-grid';
	import Table2Icon from '@lucide/svelte/icons/table-2';
	import { useClientSearch } from './use-client-search.svelte';

	const searchParams = useClientSearch();

	let currentViewMode = $derived(searchParams.viewMode);

	function handleViewModeChange(viewMode: string) {
		searchParams.update({ viewMode });
	}
</script>

<div class="flex items-center space-x-1">
	<Tooltip>
		<TooltipTrigger>
			<Button
				variant={currentViewMode === 'cards' ? 'default' : 'outline'}
				size="sm"
				onclick={() => handleViewModeChange('cards')}
				class="cursor-pointer"
			>
				<LayoutGridIcon class="h-4 w-4" />
			</Button>
		</TooltipTrigger>
		<TooltipContent>
			<p>View as cards</p>
		</TooltipContent>
	</Tooltip>
	<Tooltip>
		<TooltipTrigger>
			<Button
				variant={currentViewMode === 'table' ? 'default' : 'outline'}
				size="sm"
				onclick={() => handleViewModeChange('table')}
				class="cursor-pointer"
			>
				<Table2Icon class="h-4 w-4" />
			</Button>
		</TooltipTrigger>
		<TooltipContent>
			<p>View as table</p>
		</TooltipContent>
	</Tooltip>
</div>
