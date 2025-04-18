# Zentora UI

<p align="center">
  <img src="public/favicon.svg" alt="Zentora UI Logo" width="80" height="80" />
</p>

<h3 align="center">Modern, Accessible React Components</h3>

<p align="center">
  A beautiful and highly customizable React components library for building modern web applications.
</p>

## Features

- 🎨 **Modern Design**: Clean, minimalist components with a contemporary aesthetic
- 🌗 **Dark Mode Support**: Seamless light/dark theme switching
- ♿ **Accessibility First**: WCAG 2.1 compliant components
- 📱 **Responsive**: Mobile-first design approach
- 🎯 **Type-Safe**: Built with TypeScript for better developer experience
- 🚀 **Performance Focused**: Optimized for speed and minimal bundle size

## Installation

```bash
npm install @zentora/ui
# or
yarn add @zentora/ui
# or
pnpm add @zentora/ui
```

## Quick Start

```tsx
import { Button, ThemeProvider } from "@zentora/ui";

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Get Started</Button>
    </ThemeProvider>
  );
}
```

## Documentation

Visit our [documentation site](https://zentora-ui.dev) to explore:

- Component API references
- Usage examples
- Theming guide
- Best practices
- Customization options

## Components

Zentora UI includes a growing collection of components:

- **Layout**: Container, Grid, Stack, Box
- **Navigation**: Header, Navbar, Tabs, Breadcrumbs
- **Forms**: Button, Input, Select, Checkbox, Radio
- **Feedback**: Alert, Toast, Progress, Spinner
- **Data Display**: Card, Table, List, Badge
- **Overlay**: Modal, Drawer, Popover, Tooltip
- **Typography**: Text, Heading, Link

## Customization

Zentora UI components are highly customizable through:

```tsx
import { createTheme } from "@zentora/ui";

const theme = createTheme({
  colors: {
    primary: "#6366F1",
    secondary: "#818CF8",
    // ... other color overrides
  },
  // ... other theme customizations
});
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT © [Zentora UI](LICENSE)

## Support

- 📧 Email: support@zentora-ui.dev
- 💬 Discord: [Join our community](https://discord.gg/zentora-ui)
- 🐦 Twitter: [@ZentoraUI](https://twitter.com/ZentoraUI)

---

<p align="center">
  Made with ❤️ by the Zentora team
</p>
