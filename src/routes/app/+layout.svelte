<script lang="ts">

	let { children } = $props();
</script>

<div class="flex flex-col items-center justify-center h-screen border-1 border-red-500 border-dashed">
{@render children?.()}
</div>

