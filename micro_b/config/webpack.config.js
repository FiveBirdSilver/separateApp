const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
plugins: [
  new ModuleFederationPlugin({
    name: "micro_b",
    filename: "remoteEntry.js",
    exposes: {
      "./Button": "./src/Button",
    },
    shared: ["raect", "react-dom"],
  }),
];
