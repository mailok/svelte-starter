<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn, type WithElementRef } from '$lib/utils.js';
	import Search from '@lucide/svelte/icons/search';
	import X from '@lucide/svelte/icons/x';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Props = WithElementRef<Omit<HTMLInputAttributes, 'type'>>;

	let {
		ref = $bindable(null),
		value = $bindable(''),
		class: className,
		disabled = false,
		oninput,
		...restProps
	}: Props = $props();

	function handleClear() {
		if (disabled || !ref) return;

		const inputElement = ref as HTMLInputElement;

		// Set the value directly on the input element
		inputElement.value = '';

		// Update the bound value
		value = '';

		// Dispatch a native input event from the element
		const inputEvent = new Event('input', { bubbles: true });
		inputElement.dispatchEvent(inputEvent);

		// Focus the input after clearing
		inputElement.focus();
	}
</script>

<div class={cn('relative', className)}>
	<Button
		type="button"
		size="icon"
		variant="ghost"
		{disabled}
		class="absolute top-1/2 left-1 size-6 -translate-y-1/2 cursor-pointer rounded-md text-muted-foreground"
		tabindex={-1}
	>
		<Search size={18} />
	</Button>
	<input
		bind:this={ref}
		bind:value
		type="text"
		{disabled}
		{oninput}
		data-slot="search-input"
		class={cn(
			'flex h-9 w-full min-w-0 rounded-md border border-input bg-background px-3 py-1 pr-9 pl-9 text-base shadow-xs ring-offset-background transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30',
			'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
			'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40'
		)}
		{...restProps}
	/>
	{#if value}
		<Button
			type="button"
			size="icon"
			variant="ghost"
			{disabled}
			onclick={handleClear}
			class="absolute top-1/2 right-1 size-6 -translate-y-1/2 cursor-pointer rounded-md text-muted-foreground hover:text-foreground"
			tabindex={-1}
		>
			<X size={18} />
		</Button>
	{/if}
</div>
