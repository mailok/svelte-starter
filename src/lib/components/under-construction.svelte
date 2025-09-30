<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
	import ConstructionIcon from '@lucide/svelte/icons/construction';
	import HammerIcon from '@lucide/svelte/icons/hammer';
</script>

<section class="flex size-full flex-col items-center justify-center p-4">
	<div class="flex flex-col items-center space-y-6">
		<!-- Animated SVG Icon -->
		<div class="relative">
			<!-- Main construction icon -->
			<ConstructionIcon class="h-24 w-24 animate-pulse text-orange-500" />

			<!-- Floating hammer with animation -->
			<div class="absolute -top-2 -right-2 animate-bounce">
				<HammerIcon class="h-8 w-8 rotate-45 text-yellow-600" />
			</div>

			<!-- Background circle for better visual impact -->
			<div
				class="absolute inset-0 -z-10 scale-150 rounded-full bg-orange-100 opacity-50 blur-2xl dark:bg-orange-900/20"
			></div>
		</div>

		<div class="space-y-4 text-center">
			<h1
				class="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-4xl font-bold text-transparent"
			>
				Under Construction
			</h1>

			<p class="max-w-md text-lg leading-relaxed text-muted-foreground">
				This page is currently under construction. We're working hard to get it ready for you. Stay
				tuned!
			</p>

			<!-- Progress bar simulation -->
			<div class="mx-auto h-2 w-64 overflow-hidden rounded-full bg-muted">
				<div
					class="h-full w-3/4 animate-pulse rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"
				></div>
			</div>
			<p class="text-sm text-muted-foreground">75% Complete</p>
		</div>

		<a href="/app">
			<Button variant="outline" class="gap-2 hover:bg-orange-50 dark:hover:bg-orange-900/20">
				<ArrowLeftIcon class="h-4 w-4" />
				Go back to the main page
			</Button>
		</a>
	</div>
</section>
