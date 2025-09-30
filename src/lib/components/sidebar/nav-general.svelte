<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import LayoutDashboard from '@lucide/svelte/icons/layout-dashboard';
	import ListToDo from '@lucide/svelte/icons/list-todo';
	import PersonStanding from '@lucide/svelte/icons/person-standing';
	import Users from '@lucide/svelte/icons/users';
	import { navLink } from './nav-link.svelte';

	const dashboardLink = navLink.createLink('/app');
	const clientsLink = navLink.createLink('/app/clients');
	const employeesLink = navLink.createLink('/app/employees');
	const tasksLink = navLink.createLink('/app/tasks');
</script>

<Sidebar.Group>
	<Sidebar.GroupLabel>General</Sidebar.GroupLabel>
	<Sidebar.Menu>
		<Sidebar.MenuItem>
			<Sidebar.MenuButton isActive={dashboardLink.isActive}>
				{#snippet child({ props })}
					<a href={dashboardLink.href} {...props}>
						<LayoutDashboard />
						<span>Dashboard</span>
					</a>
				{/snippet}
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
	<Sidebar.Menu>
		<Sidebar.MenuItem>
			<Sidebar.MenuButton isActive={clientsLink.isActive}>
				{#snippet child({ props })}
					<a href={clientsLink.href} {...props}>
						<PersonStanding />
						<span>Clients</span>
					</a>
				{/snippet}
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
	<Sidebar.Menu>
		<Sidebar.MenuItem>
			<Sidebar.MenuButton isActive={employeesLink.isActive}>
				{#snippet child({ props })}
					<a href={employeesLink.href} {...props}>
						<Users />
						<span>Employees</span>
					</a>
				{/snippet}
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
	<Sidebar.Menu>
		<Sidebar.MenuItem>
			<Sidebar.MenuButton isActive={tasksLink.isActive}>
				{#snippet child({ props })}
					<a href={tasksLink.href} {...props}>
						<ListToDo />
						<span>Tasks</span>
					</a>
				{/snippet}
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
</Sidebar.Group>
