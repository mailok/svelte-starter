import { useSearchParams } from 'runed/kit';
import * as v from 'valibot';

export const clientSearchSchema = v.object({
	status: v.optional(v.fallback(v.string(), 'active'), 'active'),
	search: v.optional(v.fallback(v.string(), ''), ''),
	page: v.optional(v.fallback(v.number(), 1), 1),
	size: v.optional(v.fallback(v.number(), 6), 6),
	viewMode: v.optional(v.fallback(v.string(), 'cards'), 'cards')
});

export type ClientSearchParams = v.InferOutput<typeof clientSearchSchema>;

export function useClientSearch() {
	return useSearchParams(clientSearchSchema, {
		pushHistory: false, // Don't create new history entry for each change
		showDefaults: false // Don't show default values in URL (cleaner URLs),
	});
}
