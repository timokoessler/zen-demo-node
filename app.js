// Demo of Zen for Node.js by Aikido Security
// https://www.aikido.dev/zen

require("dotenv").config();

// Import Zen before any other module (except environment variable loading)
const Zen = require("@aikidosec/firewall");

const express = require("express");
const { resolve } = require("path");
const { initDatabase } = require("./src/db");
const { initApi } = require("./src/api");

async function main() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // For user based rate limiting, add a middleware before calling Zen.addExpressMiddleware
  // app.use((req, res, next) => {
  //   const userId = "???"; // Replace with your user ID logic
  //   Zen.setUser({ id: userId }); // Optionally you can also set a user name ("name": "...")

  // Adds the middleware for rate limiting and user blocking
  Zen.addExpressMiddleware(app);

  app.use(express.static("src/static"));

  app.get("/", (req, res) => {
    res.sendFile(resolve(__dirname, "src/pages/index.html"));
  });

  const pages = ["sql", "shell", "ssrf", "files"];
  for (const page of pages) {
    app.get(`/${page}`, (req, res) => {
      res.sendFile(resolve(__dirname, `src/pages/${page}.html`));
    });
  }

  await initDatabase();
  initApi(app);

  const port = getPort();
  const host = process.env.HOST || "localhost";

  app.listen(port, host, () => {
    console.log(`Zen demo app listening at http://${host}:${port}`);
  });
}

function getPort() {
  if (process.env.PORT) {
    return process.env.PORT;
  }
  if (process.argv.length > 2) {
    return process.argv[2];
  }
  return 3000;
}

// Start the server
main();
