<script lang="ts">
	import { page } from '$app/state';
	import NotFound from '$lib/components/not-found.svelte';
</script>

<svelte:head>
	<title>{page.status} - Error</title>
</svelte:head>

{#if page.status === 404}
	<NotFound />
{:else}
	<!-- For errors other than 404 -->
	<div class="size-full h-svh">
		<div class="m-auto flex size-full flex-col items-center justify-center gap-2">
			<h1 class="text-[7rem] leading-tight font-bold">{page.status}</h1>
			<span class="font-medium">Something went wrong!</span>
			<p class="text-center text-muted-foreground">
				{page.error?.message || 'An unexpected error occurred.'}
			</p>
		</div>
	</div>
{/if}
