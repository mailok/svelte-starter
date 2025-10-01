import { query } from '$app/server';
import { clientsData } from '$lib/clients-mock.server';
import { sleep } from '$lib/sleep.server';
import { clientSearchSchema } from '../use-client-search.svelte';

type GetClientsResult = {
	clients: typeof clientsData;
	total: number;
	page: number;
	size: number;
};

export const getClients = query(clientSearchSchema, async (params): Promise<GetClientsResult> => {
	let filtered = [...clientsData];

	// Filter by status
	if (params.status && params.status !== 'all') {
		filtered = filtered.filter((client) => client.status === params.status);
	}

	// Filter by search (name and email)
	if (params.search && params.search.trim() !== '') {
		const searchLower = params.search.toLowerCase();
		filtered = filtered.filter(
			(client) =>
				client.name.toLowerCase().includes(searchLower) ||
				client.email.toLowerCase().includes(searchLower)
		);
	}

	// Pagination
	const start = (params.page - 1) * params.size;
	const end = start + params.size;
	const paginated = filtered.slice(start, end);

	// Simulate realistic network delay
	await sleep();

	return {
		clients: paginated,
		total: filtered.length,
		page: params.page,
		size: params.size
	};
});
