# BookVibe

A modern book tracking web app to discover, organize, and visualize your reading journey — built with React and Tailwind CSS.

![BookVibe](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=flat)

---

## Features

- **Browse Books** — Explore a curated collection of books on the home page
- **Book Details** — View full details including review, publisher, rating, and page count
- **Read List** — Mark books as read and track them in your personal shelf
- **Wishlist** — Save books you want to read later
- **Sort & Filter** — Sort your lists by rating, pages, or published year
- **Pages to Read Chart** — Visualize your read books with an interactive bar chart
- **Delete Books** — Remove books from your read list or wishlist
- **Persistent Storage** — All lists are saved to `localStorage` and survive page refreshes
- **404 Page** — Friendly not-found page for unknown routes
- **Responsive Design** — Fully mobile-friendly across all screen sizes

---

## Tech Stack

| Technology                                                 | Purpose                       |
| ---------------------------------------------------------- | ----------------------------- |
| [React 19](https://react.dev)                              | UI framework                  |
| [React Router 7](https://reactrouter.com)                  | Client-side routing           |
| [Tailwind CSS 4](https://tailwindcss.com)                  | Utility-first styling         |
| [DaisyUI 5](https://daisyui.com)                           | UI component primitives       |
| [Recharts](https://recharts.org)                           | Reading progress chart        |
| [Lucide React](https://lucide.dev)                         | Icon library                  |
| [React Icons](https://react-icons.github.io/react-icons)   | Social icons (Font Awesome 6) |
| [React Toastify](https://fkhadra.github.io/react-toastify) | Toast notifications           |
| [Vite](https://vitejs.dev)                                 | Build tool & dev server       |

---

## Getting Started

### Prerequisites

- Node.js `>=18`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/marufbillah-dev/book-vibe.git

# Navigate into the project
cd book-vibe

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── assets/              # Static assets (images)
├── components/
│   ├── home/
│   │   ├── Hero.jsx               # Landing hero section
│   │   └── books/
│   │       ├── BookCard.jsx       # Book grid card
│   │       ├── BooksContainer.jsx # Home books grid
│   │       └── listed-books/
│   │           ├── EmptyState.jsx
│   │           ├── ListedBookCard.jsx
│   │           └── ListedBooksContainer.jsx
│   └── shared/
│       ├── Footer.jsx
│       ├── Navbar.jsx
│       └── ScrollToTop.jsx
├── context/
│   ├── BooksContext.jsx   # React context definition
│   └── ContextProvider.jsx
├── hooks/
│   └── useTitle.jsx       # Dynamic page title hook
├── pages/
│   ├── BookDetails.jsx
│   ├── Home.jsx
│   ├── ListedBooks.jsx
│   ├── NotFound.jsx
│   └── pages-to-read/
│       ├── NoReadBooks.jsx
│       └── PagesToRead.jsx
├── routes/
│   └── Routes.jsx
├── utils/
│   └── localDB.js         # localStorage read/write helpers
├── App.jsx
├── index.css
└── main.jsx
```

---

## Data

Book data is served from `public/booksData.json`. Each book entry follows this shape:

```json
{
  "bookId": 1,
  "bookName": "Book Title",
  "author": "Author Name",
  "image": "image-url",
  "review": "Short review text",
  "totalPages": 320,
  "rating": 4.5,
  "category": "Fiction",
  "tags": ["Classic", "Drama"],
  "publisher": "Publisher Name",
  "yearOfPublishing": 1951
}
```

---

## Contributing

Contributions are welcome. Please open an issue first to discuss what you'd like to change, then submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a pull request

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

**Maruf Billah**

Built with passion for books and clean code.
