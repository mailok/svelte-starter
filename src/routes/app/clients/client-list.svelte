<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Client } from '$lib/clients-mock.server';
	import * as Avatar from '$lib/components/ui/avatar';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import * as Card from '$lib/components/ui/card';
	import Skeleton from '$lib/components/ui/skeleton/skeleton.svelte';
	import * as Table from '$lib/components/ui/table';
	import { useClientSearch } from './use-client-search.svelte';

	type ClientsData = {
		clients: Client[];
		total: number;
		totalPages: number;
	};

	type ClientListProps = {
		clientsDataPromise: Promise<ClientsData>;
	};

	let { clientsDataPromise }: ClientListProps = $props();

	const searchParams = useClientSearch();
	let viewMode = $derived(searchParams.viewMode);

	function handleClientClick(client: Client) {
		goto(`/app/clients/${client.id}`);
	}

	function getInitials(name: string) {
		return name
			.split(' ')
			.map((n) => n[0])
			.join('')
			.toUpperCase()
			.slice(0, 2);
	}

	function getStatusLabel(status: Client['status']) {
		const labels = {
			active: 'Active',
			pending: 'Pending',
			inactive: 'Inactive'
		};
		return labels[status];
	}
</script>

{#await clientsDataPromise}
	<!-- Loading state -->
	{#if viewMode === 'cards'}
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each Array.from({ length: 6 }) as _, i (i)}
				{@render cardSkeleton()}
			{/each}
		</div>
	{:else}
		{@render tableSkeleton()}
	{/if}
{:then clientsData}
	<!-- Success state -->
	{@const clients = clientsData.clients}
	{#if clients.length === 0}
		{@render emptyState()}
	{:else if viewMode === 'cards'}
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each clients as client (client.id)}
				{@render clientCard(client)}
			{/each}
		</div>
	{:else}
		{@render clientTable(clients)}
	{/if}
{:catch error}
	<!-- Error state -->
	<Card.Root class="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950">
		<Card.Content class="p-6 text-center">
			<div
				class="mx-auto flex size-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900"
			>
				<svg
					class="size-8 text-red-600 dark:text-red-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width={2}
						d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
			<h3 class="mt-4 text-lg font-semibold text-red-900 dark:text-red-100">
				Error loading clients
			</h3>
			<p class="mt-2 text-sm text-red-700 dark:text-red-300">
				{error?.message || 'An unexpected error occurred'}
			</p>
		</Card.Content>
	</Card.Root>
{/await}

{#snippet cardSkeleton()}
	<Card.Root class="card-elevated">
		<Card.Content class="p-6">
			<div class="flex items-start space-x-4">
				<Skeleton class="size-16 rounded-full" />
				<div class="flex-1 space-y-3">
					<div class="flex items-start justify-between">
						<div class="space-y-2">
							<Skeleton class="h-5 w-32" />
							<Skeleton class="h-4 w-16" />
						</div>
					</div>
					<div class="space-y-2">
						<Skeleton class="h-4 w-48" />
						<Skeleton class="h-4 w-36" />
					</div>
					<div class="border-t border-border pt-3">
						<div class="space-y-2">
							<Skeleton class="h-4 w-40" />
							<Skeleton class="h-4 w-24" />
						</div>
					</div>
				</div>
			</div>
		</Card.Content>
	</Card.Root>
{/snippet}

{#snippet tableSkeleton()}
	<div class="rounded-lg border bg-card shadow">
		<div class="space-y-4 p-4">
			{#each Array.from({ length: 6 }) as _, i (i)}
				<div class="flex items-center space-x-4">
					<Skeleton class="size-8 rounded-full" />
					<div class="grid flex-1 grid-cols-7 gap-4">
						<Skeleton class="h-4" />
						<Skeleton class="h-4" />
						<Skeleton class="h-4" />
						<Skeleton class="h-4" />
						<Skeleton class="h-4" />
						<Skeleton class="h-4" />
						<Skeleton class="h-4" />
					</div>
				</div>
			{/each}
		</div>
	</div>
{/snippet}

{#snippet emptyState()}
	<Card.Root class="card-elevated">
		<Card.Content class="p-12 text-center">
			<div class="mx-auto flex size-16 items-center justify-center rounded-full bg-muted">
				<svg
					class="size-8 text-muted-foreground"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width={2}
						d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
			</div>
			<h3 class="mt-4 text-lg font-semibold text-foreground">No clients found</h3>
			<p class="mt-2 text-sm text-muted-foreground">
				No clients were found matching the applied filters.
			</p>
		</Card.Content>
	</Card.Root>
{/snippet}

{#snippet clientCard(client: Client)}
	<Card.Root class="card-elevated cursor-pointer transition-shadow hover:shadow-lg">
		<Card.Content class="p-6">
			<button
				class="flex w-full items-start space-x-4 text-left"
				onclick={() => handleClientClick(client)}
			>
				<Avatar.Root class="size-16 shrink-0">
					{#if client.photo}
						<Avatar.Image src={client.photo} alt={client.name} />
					{/if}
					<Avatar.Fallback>{getInitials(client.name)}</Avatar.Fallback>
				</Avatar.Root>
				<div class="min-w-0 flex-1 space-y-3">
					<div class="flex items-start justify-between gap-2">
						<div class="min-w-0 flex-1 space-y-1">
							<h3 class="truncate font-semibold text-foreground">{client.name}</h3>
							<Badge data-status={client.status}>
								{getStatusLabel(client.status)}
							</Badge>
						</div>
					</div>
					<div class="space-y-1 text-sm text-muted-foreground">
						<p class="flex items-center gap-2">
							<svg class="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width={2}
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							<span class="truncate">{client.email}</span>
						</p>
						<p class="flex items-center gap-2">
							<svg class="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width={2}
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
							<span class="truncate">{client.phone}</span>
						</p>
					</div>
					<div class="border-t border-border pt-3">
						<div class="space-y-1 text-xs text-muted-foreground">
							<p>
								<span class="font-medium">Age:</span>
								{client.age} years
							</p>
							<p>
								<span class="font-medium">Joined:</span>
								{new Date(client.createdAt).toLocaleDateString()}
							</p>
						</div>
					</div>
				</div>
			</button>
		</Card.Content>
	</Card.Root>
{/snippet}

{#snippet clientTable(clients: Client[])}
	<div class="rounded-lg border bg-card shadow">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-12"></Table.Head>
					<Table.Head>Name</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head>Email</Table.Head>
					<Table.Head>Phone</Table.Head>
					<Table.Head>Age</Table.Head>
					<Table.Head>Gender</Table.Head>
					<Table.Head>Joined</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each clients as client (client.id)}
					<Table.Row class="cursor-pointer" onclick={() => handleClientClick(client)}>
						<Table.Cell>
							<Avatar.Root class="size-8">
								{#if client.photo}
									<Avatar.Image src={client.photo} alt={client.name} />
								{/if}
								<Avatar.Fallback>{getInitials(client.name)}</Avatar.Fallback>
							</Avatar.Root>
						</Table.Cell>
						<Table.Cell class="font-medium">{client.name}</Table.Cell>
						<Table.Cell>
							<Badge data-status={client.status}>
								{getStatusLabel(client.status)}
							</Badge>
						</Table.Cell>
						<Table.Cell>{client.email}</Table.Cell>
						<Table.Cell>{client.phone}</Table.Cell>
						<Table.Cell>{client.age}</Table.Cell>
						<Table.Cell class="capitalize">{client.gender}</Table.Cell>
						<Table.Cell>
							{new Date(client.createdAt).toLocaleDateString()}
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
{/snippet}
