import { query } from '$app/server';
import { clientsData } from '$lib/clients-mock.server';
// import { sleep } from '$lib/sleep.server';

export const getInsights = query(async () => {
	// await sleep();

	return {
		active: clientsData.filter((client) => client.status === 'active').length,
		inactive: clientsData.filter((client) => client.status === 'inactive').length,
		pending: clientsData.filter((client) => client.status === 'pending').length,
		total: clientsData.length
	};
});
