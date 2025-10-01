<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card/index.js';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
	import CircleX from '@lucide/svelte/icons/circle-x';
	import Clock from '@lucide/svelte/icons/clock';
	import UserCheck from '@lucide/svelte/icons/user-check';
	import UserX from '@lucide/svelte/icons/user-x';
	import Users from '@lucide/svelte/icons/users';
	import { getInsights } from './remote/insights.remote.js';

	type SummaryItem = {
		key: 'total' | 'active' | 'pending' | 'inactive';
		label: string;
		icon: any;
		colorClass: string;
		bgClass: string;
	};

	const summaryItems: SummaryItem[] = [
		{
			key: 'total',
			label: 'Total Clients',
			icon: Users,
			colorClass: 'text-blue-600',
			bgClass: 'bg-blue-100'
		},
		{
			key: 'active',
			label: 'Active',
			icon: UserCheck,
			colorClass: 'text-green-600',
			bgClass: 'bg-green-100'
		},
		{
			key: 'pending',
			label: 'Pending',
			icon: Clock,
			colorClass: 'text-orange-600',
			bgClass: 'bg-orange-100'
		},
		{
			key: 'inactive',
			label: 'Inactive',
			icon: UserX,
			colorClass: 'text-red-600',
			bgClass: 'bg-red-100'
		}
	];
</script>

{#await getInsights()}
	<!-- Loading state -->
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each summaryItems as item (item.key)}
			<Card class="card-elevated">
				<CardContent class="p-6">
					<div class="flex items-center space-x-4">
						<Skeleton class="h-12 w-12 rounded-lg" />
						<div class="space-y-2">
							<Skeleton class="h-4 w-20" />
							<Skeleton class="h-6 w-8" />
						</div>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
{:then summary}
	<!-- Success state -->
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each summaryItems as item (item.key)}
			{@const Icon = item.icon}
			{@const value = summary[item.key]}
			<Card class="card-elevated status-indicator">
				<CardContent class="p-6">
					<div class="flex items-center space-x-4">
						<div class="flex h-12 w-12 items-center justify-center rounded-lg {item.bgClass}">
							<Icon class="h-6 w-6 {item.colorClass}" />
						</div>
						<div>
							<p class="text-sm font-medium text-muted-foreground">
								{item.label}
							</p>
							<p class="text-2xl font-bold text-foreground">{value}</p>
						</div>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
{:catch error}
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each summaryItems as item (item.key)}
			<Card
				class="card-elevated status-indicator cursor-pointer transition-shadow hover:shadow-lg"
				onclick={() => getInsights().refresh()}
				role="button"
				tabindex={0}
				onkeydown={(e) => e.key === 'Enter' && getInsights().refresh()}
			>
				<CardContent class="p-6">
					<div class="flex items-center space-x-4">
						<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
							<CircleX class="h-6 w-6 text-red-600" />
						</div>
						<div>
							<p class="text-sm font-medium text-muted-foreground">
								{item.label}
							</p>
							<p class="text-2xl font-bold text-destructive">0</p>
						</div>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
	<!-- Error message below the cards -->
	<div class="mt-4 text-center">
		<p class="text-sm text-muted-foreground">Error loading data. Click any card to retry.</p>
	</div>
{/await}
