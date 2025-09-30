import { page } from '$app/state';

class NavLink {
	createLink(href: string) {
		return {
			href,
			get isActive() {
				return page.url.pathname === href;
			}
		};
	}
}

export const navLink = new NavLink();
