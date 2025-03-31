require("dotenv").config();

// Import Zen at the top of your main file
const Zen = require("@aikidosec/firewall");

const express = require("express");
const { resolve } = require("path");
const { initDatabase } = require("./src/db");
const { initApi } = require("./src/api");

async function main() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  await initDatabase();

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

  initApi(app);

  const port = process.env.PORT || 3000;
  const host = process.env.HOST || "localhost";

  app.listen(port, host, () => {
    console.log(`Example app listening at http://${host}:${port}`);
  });
}

main();
