import type { Snippet } from 'svelte';
import { getContext, setContext } from 'svelte';

export type BreadcrumbItem = {
	key: string;
	snippet: Snippet;
};

class BreadcrumbsState {
	#items = $state<Record<string, BreadcrumbItem>>({});
	items = $derived.by(() => Object.values(this.#items));

	addItem(item: BreadcrumbItem) {
		this.#items[item.key] = { ...item };
	}

	removeItem(key: string): boolean {
		if (key in this.#items) {
			delete this.#items[key];
			return true;
		}
		return false;
	}

	clear() {
		this.#items = {};
	}
}

const SYMBOL_KEY = 'scn-breadcrumbs';

export function setBreadcrumbs(): BreadcrumbsState {
	return setContext(Symbol.for(SYMBOL_KEY), new BreadcrumbsState());
}

export function useBreadcrumbs(): BreadcrumbsState {
	return getContext(Symbol.for(SYMBOL_KEY));
}
