import type { Snippet } from 'svelte';
import { getContext, onDestroy, onMount, setContext } from 'svelte';

export type BreadcrumbItem = {
	key?: string;
	href: string;
	snippet: Snippet;
};

class BreadcrumbsState {
	#items = $state<BreadcrumbItem[]>([]);
	items = $derived.by(() => this.#items.toReversed());

	add(item: BreadcrumbItem) {
		if (!item.key) {
			item.key = item.href;
		}
		this.#items.push(item);
	}

	remove(item: BreadcrumbItem) {
		this.#items = this.#items.filter((_item) => _item.key !== item.key);
	}

	register(item: BreadcrumbItem) {
		onMount(() => {
			this.add(item);
		});

		onDestroy(() => {
			this.remove(item);
		});

		return item;
	}
}

const SYMBOL_KEY = 'breadcrumbs';

export function setBreadcrumbs(): BreadcrumbsState {
	return setContext(Symbol.for(SYMBOL_KEY), new BreadcrumbsState());
}

export function useBreadcrumbs(): BreadcrumbsState {
	return getContext(Symbol.for(SYMBOL_KEY));
}
