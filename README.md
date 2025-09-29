# SvelteKit Starter

A modern SvelteKit template with TypeScript, shadcn-svelte, and pre-built layouts for rapid development.

## ✨ Features

- **SvelteKit** - Full-stack web framework with modern features
- **Svelte 5** - Latest Svelte version with runes and enhanced reactivity
- **TypeScript** - Full type safety and better developer experience
- **shadcn-svelte** - Beautiful and accessible UI components
- **Tailwind CSS** - Modern utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Mode Watcher** - Built-in dark/light theme support

## 🏗️ Pre-built Components

- **Sidebar Navigation** - Collapsible sidebar with nested menus
- **Button Library** - Multiple button variants and sizes
- **Form Components** - Input, checkbox, radio, select, and label components
- **Layout Components** - Card, dialog, drawer, and sheet layouts
- **Navigation** - Breadcrumb, dropdown menu, and navigation components
- **Feedback** - Progress bars, skeleton loaders, and toast notifications
- **Dark Mode** - Built-in theme switching support
- **Responsive Design** - Mobile-first responsive layouts

## 🚀 Quick Start

1. **Clone or use this template**

   ```bash
   git clone [your-repo-url]
   cd svelte-starter
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm run dev

   # or start the server and open the app in a new browser tab
   pnpm run dev -- --open
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/
│   │   └── ui/             # shadcn-svelte components
│   ├── hooks/              # Custom Svelte hooks
│   └── utils.ts            # Utility functions
├── routes/                 # SvelteKit routes and layouts
├── app.css                 # Global styles and Tailwind
└── app.html               # HTML template
```

## 🔧 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run check` - Run Svelte check
- `pnpm run lint` - Run ESLint

## 🎨 Customization

This template is designed to be easily customizable:

1. **Update branding** - Change colors, logos, and titles
2. **Add routes** - Create new pages in the `src/routes/` directory
3. **Modify components** - Edit UI components in `src/lib/components/ui/`
4. **Extend functionality** - Add more shadcn-svelte components as needed

## 📚 Tech Stack

- [SvelteKit](https://kit.svelte.dev/) - Full-stack framework
- [Svelte 5](https://svelte.dev/) - UI framework with runes
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [shadcn-svelte](https://www.shadcn-svelte.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vite](https://vitejs.dev/) - Build tool
- [Mode Watcher](https://mode-watcher.svecosystem.com/) - Theme management

## 📄 License

This template is open source and available under the [MIT License](LICENSE).

---

**Ready to build something amazing? Start coding! 🚀**
