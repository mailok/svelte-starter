<script lang="ts">
	import AppSidebar from '$lib/components/sidebar/app-sidebar.svelte';
	import ThemeToggle from '$lib/components/theme-toggle.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	let { children } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<header
			class="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)"
		>
			<div class="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
				<Sidebar.Trigger class="-ml-1" />
				<Separator orientation="vertical" class="mx-2 data-[orientation=vertical]:h-4" />
				<!-- <Breadcrumbs /> -->
				<div class="ml-auto flex items-center gap-2">
					<Button variant="ghost" size="sm" class="hidden sm:flex">
						<a
							href="https://github.com/mailok/svelte-starter"
							rel="noopener noreferrer"
							target="_blank"
							class="dark:text-foreground"
						>
							GitHub
						</a>
					</Button>
					<ThemeToggle />
				</div>
			</div>
		</header>
		<div class="size-full">
			{@render children?.()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
