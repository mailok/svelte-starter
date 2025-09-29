<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import Bell from '@lucide/svelte/icons/bell';
	import Settings from '@lucide/svelte/icons/settings';
	import User from '@lucide/svelte/icons/user';
</script>

<Sidebar.Group>
	<Sidebar.GroupLabel>Settings</Sidebar.GroupLabel>
	<Sidebar.Menu>
		<Sidebar.MenuItem>
			<Sidebar.MenuButton>
				<User />
				<a href="/app/account">
					<span>Account</span>
				</a>
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
	<Sidebar.Menu>
		<Sidebar.MenuItem>
			<Sidebar.MenuButton>
				<Bell />
				<a href="/app/notifications">
					<span>Notifications</span>
				</a>
			</Sidebar.MenuButton>
			<Sidebar.MenuBadge class="bg-primary text-primary-foreground">10</Sidebar.MenuBadge>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
	<Sidebar.Menu>
		<Sidebar.MenuItem>
			<Sidebar.MenuButton>
				<Settings />
				<a href="/app/preferences">
					<span>Preferences</span>
				</a>
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
</Sidebar.Group>
