<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button/index.js';
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';

	function handleGoBack() {
		// If we're in the /app section, go to dashboard
		if (page.url.pathname.startsWith('/app')) {
			goto('/app');
		} else {
			// Otherwise, go to home
			goto('/');
		}
	}

	function handleGoHome() {
		goto('/');
	}

	// Determine button text based on current route
	const backButtonText = $derived(
		page.url.pathname.startsWith('/app') ? 'Go back to Dashboard' : 'Go back to Home'
	);
</script>

<section class="flex size-full h-svh flex-col items-center justify-center p-4">
	<div class="flex flex-col items-center space-y-6">
		<!-- Animated SVG Icon -->
		<div class="relative">
			<!-- Background circle for better visual impact -->
			<div
				class="absolute inset-0 -z-10 scale-150 rounded-full bg-red-100 opacity-50 blur-2xl dark:bg-red-900/20"
			></div>
		</div>

		<div class="space-y-4 text-center">
			<h1 class="bg-clip-text text-4xl font-bold text-destructive">Page Not Found</h1>

			<p class="max-w-md text-lg leading-relaxed text-muted-foreground">
				It seems like the page you're looking for does not exist or might have been removed. Let's
				get you back on track!
			</p>
		</div>

		<div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
			<Button
				variant="outline"
				onclick={handleGoBack}
				class="gap-2 hover:bg-red-50 dark:hover:bg-red-900/20"
			>
				<ArrowLeftIcon class="h-4 w-4" />
				{backButtonText}
			</Button>
			<Button onclick={handleGoHome} class="gap-2">Back to Home</Button>
		</div>
	</div>
</section>
