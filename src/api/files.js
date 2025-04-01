const { readFile } = require("fs/promises");

function registerFileRoutes(app) {
  app.post("/api/readfile", async (req, res) => {
    const { path } = req.body;

    try {
      const file = await readFile(`${__dirname}/blog/${path}`, "utf8");

      return res.send(file);
    } catch (err) {
      // Insecure
      return res.status(500).send(err.message);
    }
  });
}

module.exports = {
  registerFileRoutes,
};
