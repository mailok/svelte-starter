<script lang="ts">
	import { page } from '$app/state';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import LayoutDashboard from '@lucide/svelte/icons/layout-dashboard';
	import ListToDo from '@lucide/svelte/icons/list-todo';
	import PersonStanding from '@lucide/svelte/icons/person-standing';
	import Users from '@lucide/svelte/icons/users';

	$inspect(page);
</script>

<Sidebar.Group>
	<Sidebar.GroupLabel>General</Sidebar.GroupLabel>
	<Sidebar.Menu>
		<Sidebar.MenuItem>
			<Sidebar.MenuButton>
				<LayoutDashboard />
				<a href="/app">
					<span>Dashboard</span>
				</a>
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
	<Sidebar.Menu>
		<Sidebar.MenuItem>
			<Sidebar.MenuButton>
				<PersonStanding />
				<a href="/app/clients">
					<span>Clients</span>
				</a>
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
	<Sidebar.Menu>
		<Sidebar.MenuItem>
			<Sidebar.MenuButton>
				<Users />
				<a href="/app/employees">
					<span>Employees</span>
				</a>
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
	<Sidebar.Menu>
		<Sidebar.MenuItem>
			<Sidebar.MenuButton>
				<ListToDo />
				<a href="/app/tasks">
					<span>Tasks</span>
				</a>
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
</Sidebar.Group>
