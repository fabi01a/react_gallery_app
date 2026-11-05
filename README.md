# React Photo Gallery

A responsive photo gallery application built with React, Vite, and React Router. The application uses the Pixabay API to fetch and display photographs based on predefined categories or user searches.

## Features

- Browse photographs in Dogs, Cats, and Birds categories.
- Search for photographs using custom search terms.
- Navigate between categories using React Router.
- Display loading, error, and no-results messages.
- Render photographs through a reusable `PhotoList` component.
- Responsive gallery layout.

## Technologies Used

- React
- JavaScript (ES6+)
- Vite
- React Router
- Pixabay API
- CSS

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```
### Navigate into the cloned repository

```bash
cd react_gallery_app
```
### 2. Navigate into the React application

```bash
cd react_gallery_app
```

### 3. Install dependencies

```bash
npm ci
```

### 4. Configure the Pixabay API key

obtain an API key from Pixabay: *You can obtain an API key from [Pixabay](https://pixabay.com/api/docs/)*

inside the `react_gallery_app directory`, create a file named `.env`

Add the following:

```env
VITE_PIXABAY_API_KEY=your_pixabay_api_key
```

Replace `your_pixabay_api_key` with your own Pixabay API key.


The `.env` file is excluded from version control using `.gitignore`. so it is not included in the cloned repository.


### 5. Start the development server

make sure your terminal is still inside `react_gallery_app`

```bash
npm run dev
```

Open the local URL displayed in your terminal, typically:

```text
http://localhost:5173/
```


### Available Scripts

Run these commands from the react_gallery_app directory:

• npm run dev  ->  Starts the Vite development server

• npm run build  ->  Creates a production build

• npm run preview  ->  Previews the production build

• npm run lint  ->  Runs ESLint to check for code issues


## How It Works

The application uses React Router to display different photo categories and search results.

The `Gallery` component determines the search term using either a category prop or a URL parameter.

React's `useEffect` hook triggers a request to the Pixabay API when the search term changes.

The returned image data is stored in React state and passed to the `PhotoList` component through props.

The application displays a loading message while images are being fetched and provides feedback when a request fails or returns no results.
