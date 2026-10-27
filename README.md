# PhotoGallery

A responsive photo discovery app built with React. Browse a collection of photos from [Lorem Picsum](https://picsum.photos/), search for photographers, and keep a personal favorites list across visits.

> **PhotoGallery** is a frontend project demonstrating reusable React components, custom hooks, responsive layouts, and browser-based persistence.

## Features

- **Live photo collection** — loads 30 photos from the Picsum Photos API when the app starts.
- **Responsive gallery** — adapts from one column on mobile to multiple columns on larger screens.
- **Instant author search** — filters the photos already in memory as you type; searching does not reload the page or make additional API requests.
- **Favorites** — add or remove photos with the heart button. Favorites are managed with `useReducer` and saved in `localStorage`.
- **Loading and error states** — displays a spinner while loading and a readable message if the request fails.
- **Accessible controls** — labeled search input, keyboard-visible focus styles, and stateful favorite buttons.

## Preview

The app opens with a photo-gallery landing page. Use the search field to find a photographer, select a heart to save a photo, and revisit saved photos in **Your favorites**.

## Built with

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Picsum Photos API](https://picsum.photos/)

## Getting started

### Requirements

- Node.js and npm
- Internet access to load the Picsum Photos API and images

### Install and run

```bash
git clone <your-repository-url>
cd <your-repository-name>/frontend
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

### Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

### Lint

```bash
npm run lint
```

## How it works

### Fetching photos

[`useFetchPhotos`](./src/hooks/useFetchPhotos.js) requests:

```text
https://picsum.photos/v2/list?limit=30
```

The hook returns `photos`, `loading`, and `error`. The gallery calls it once on mount and presents the appropriate loading, error, empty, or results view.

### Searching

The search field is controlled by React state in [`App.jsx`](./src/App.jsx). The gallery uses `useMemo` to filter the fetched photos by author, ignoring letter case. Search updates are local and do not trigger another network request.

### Favorites

The gallery's `useReducer` toggles photos in and out of the favorites list. The list is initialized from and synchronized with browser `localStorage`, so saved items remain after a refresh in the same browser.

## Project structure

```text
frontend/
├── src/
│   ├── components/
│   │   ├── Footer/
│   │   ├── Header/
│   │   └── HeroSection/
│   │       ├── favourates/
│   │       └── mainArea/
│   ├── hooks/
│   │   └── useFetchPhotos.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Notes

- The gallery requires a network connection to retrieve photos from Picsum.
- Favorites are stored locally in the current browser and are not synced between devices.
- Photo content and author names are provided by Picsum Photos.

## License

Add a license to this repository if you intend to distribute or reuse the project. Until then, all rights remain with the respective content owners.
