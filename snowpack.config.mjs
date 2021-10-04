/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    //directory name: 'build directory'
    public: "/",
    src: "/dist",
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    [
      "@snowpack/plugin-run-script",
      {
        cmd: "eslint src --ext .js,.jsx",
        // Optional: Use npm package "eslint-watch" to run on every file change
        watch: "esw -w --clear --fix src --ext .js,.jsx",
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
