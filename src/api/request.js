function registerRequestRoutes(app) {
  app.post("/api/request", async (req, res) => {
    const { url } = req.body;

    try {
      const request = await fetch(url);

      return res.send(
        `Request successfull. Status: ${request.status} ${request.statusText}`,
      );
    } catch (err) {
      // Insecure
      return res.status(500).send(err.message);
    }
  });
}

module.exports = {
  registerRequestRoutes,
};
