import { validateSearchParams } from 'runed/kit';
import type { PageServerLoad } from './$types';
import { getClients } from './remote/get-clients.remote.js';
import { clientSearchSchema } from './use-client-search.svelte';

export const ssr = false;

export const load: PageServerLoad = async ({ url }) => {
	// Validate and get search params
	const { data } = validateSearchParams(url, clientSearchSchema);

	// Get clients with validated params
	const result = await getClients({
		status: data.status,
		search: data.search,
		page: data.page,
		size: data.size
	});

	return {
		clients: result.clients,
		total: result.total,
		totalPages: Math.ceil(result.total / data.size),
		searchParams: data
	};
};
