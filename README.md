# alx-project-0x00-setup

This project demonstrates a basic Next.js setup using TypeScript, ESLint, Tailwind CSS, and import alias, following the ALX project requirements. It covers project scaffolding, directory structure, page routing, component creation and usage, TypeScript interfaces, and reusable UI components.

## Project Initialization

1. **Scaffold the project**  
   ```sh
   npx create-next-app@latest alx-project-0x00 --typescript
   ```
   - Select **Yes** for ESLint, Tailwind CSS, and import alias.
   - Select **No** for `/src` directory and App Router.

2. **Start the development server**  
   ```sh
   npm run dev -- -p 3000
   ```

## Directory Structure

- `/components`: For reusable React components (`Card.tsx`, `Pill.tsx`, `Button.tsx`)
- `/interfaces`: For TypeScript interfaces (`index.ts`)
- `/pages`: For Next.js pages (`index.tsx`, `landing.tsx`, `about.tsx`)

## Pages Routing

- `/`: Home page (`pages/index.tsx`)
- `/landing`: Landing page
- `/about`: About page

## Component Usage

- **Card** and **Pill** components are reusable and used in the Landing page.
- **Pill** uses TypeScript props interface for its `title`.
- **Button** component accepts `title` and `styles` props, and can be rendered in different shapes and sizes.

## Example Component Usage

```tsx
// Example: Use <Card /> and <Button /> in pages/landing.tsx
<Card />
<Button title="Small Rounded" styles="rounded-sm text-xs px-2 py-1" />
<Button title="Medium Rounded" styles="rounded-md text-base px-4 py-2" />
<Button title="Large Full" styles="rounded-full text-lg px-6 py-3" />
```

## Development

- Start the server: `npm run dev -- -p 3000`
- Visit [http://localhost:3000](http://localhost:3000) for Home
- Visit [http://localhost:3000/landing](http://localhost:3000/landing) for Landing
- Visit [http://localhost:3000/about](http://localhost:3000/about) for About

---

This project follows the ALX instructions for learning Next.js basics, routing, TypeScript interfaces, and reusable React components.
