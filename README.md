# News2day Admin Panel

## Overview
The news2day Admin Panel is a web-based interface designed for managing the content and settings of the news2day application. It allows administrators to easily update news articles, manage user comments, and configure application settings.

## Setup Instructions
1. Clone the repository:

   ```bash
   git clone https://github.com/bhanupm07/news2day-admin-panel
   ```

2. Navigate to the project directory:
 
    ```bash
    cd news2day-admin
    ``` 

3. Install dependencies:

    ```bash
    npm install
    ```

## Running the Admin Panel

1. Start the development server:

  ```bash
  npm run dev
  ```

2. The admin panel will be available at http://localhost:5173 (or the port specified in the output).

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Libraries Used

- `@chakra-ui/react`: A simple, modular and accessible component library for building React applications.
- `react & react-dom`: JavaScript library for building user interfaces, used here for rendering the admin panel's UI.
- `react-icons`: An icon library to enhance the visual aspect of the admin panel.
- `react-id-generator`: A utility for generating unique IDs in React applications.
- `react-router-dom`: For routing and navigation within the admin panel.
- `recharts`: A chart library built with React and D3, used for displaying analytics and statistics.
- `vite`: A build tool that aims to provide a faster and leaner development experience for modern web projects.

## Troubleshooting

- Issue with starting the server: Ensure all dependencies are installed correctly. If problems persist, try running `npm rebuild` or deleting the `node_modules` folder and running `npm install` again.
- UI not rendering properly: Check that all Chakra UI components are correctly imported and that the TailwindCSS styles are applied.

## Contributing

We welcome contributions to the news2day Admin Panel. If you have suggestions or improvements, please fork the repository and submit a pull request.




