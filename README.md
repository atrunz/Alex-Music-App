# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Check for understanding

What does async do and why do we need it?
It lets a function work with asynchronous code, like fetching data from an API.

What does await do? What happens if you remove it?
await pauses until the promise finishes. Without it, your code moves on before the data is ready.

What is the dependency array in useEffect? What does [] mean?
It tells React when to run the effect. [] means run once when the component first loads.

Why use useState(null) for the joke instead of useState('')?
Because the joke is an object, not a string. null clearly means “no joke loaded yet.”

What happens if you remove [] from useEffect?
fetchJoke() would run after every render, causing repeated API calls and likely an infinite loop.