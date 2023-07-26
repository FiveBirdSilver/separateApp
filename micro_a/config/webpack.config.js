const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
plugins: [
  new ModuleFederationPlugin({
    name: "micro_a",
    remotes: {
      microfrontedn_b: "micro_b@http://localhost:3001/remoteEntry.js",
    },
    shared: ["react", "react-dom"],
  }),
];
