require("dotenv").config();

// Import Zen at the top of your main file
const Zen = require("@aikidosec/firewall");

const express = require("express");
const { resolve } = require("path");
const { initDatabase } = require("./src/db");
const { initApi } = require("./src/api");

function getPort() {
  if (process.env.PORT) {
    return process.env.PORT;
  }
  if (process.argv.length > 2) {
    return process.argv[2];
  }
  return 3000;
}

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

  const port = getPort();
  const host = process.env.HOST || "localhost";

  app.listen(port, host, () => {
    console.log(`Example app listening at http://${host}:${port}`);
  });
}

main();
