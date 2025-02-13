# shadcn/ui extension

This Scaffold-ETH extension allows for the use of https://ui.shadcn.com components.

## Installation

```bash
npx create-eth@latest -e ChangoMan/shadcn-extension
```

## Setup

To complete the setup of this extension, be sure to copy the contents of [tailwind.config.js](./tailwind.config.js) into your own Tailwind CSS config after installation.

We also need to update the `<ThemeProvider>` component. Open up your layout file at `packages/nextjs/app/layout.tsx` and add modify the `<ThemeProvider>` to be:

```jsx
<ThemeProvider attribute="class" enableSystem>
```

These steps will ensure the theme toggle is compatible with shadcn/ui
