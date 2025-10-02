import { validateSearchParams } from 'runed/kit';
import type { PageServerLoad } from './$types';
import { getClients } from './remote/get-clients.remote.js';
import { clientSearchSchema } from './use-client-search.svelte';

export const ssr = false;

export const load: PageServerLoad = async ({ url }) => {
	// Validate and get search params
	const { data } = validateSearchParams(url, clientSearchSchema);

	// Return the promise directly for streaming (no await)
	const clientsPromise = getClients({
		status: data.status,
		search: data.search,
		page: data.page,
		size: data.size
	}).then((result) => ({
		clients: result.clients,
		total: result.total,
		totalPages: Math.ceil(result.total / data.size)
	}));

	return {
		searchParams: data,
		clientsData: clientsPromise
	};
};
