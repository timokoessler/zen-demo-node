const { exec } = require("child_process");

function registerShellRoutes(app) {
  app.post("/api/execute", (req, res) => {
    const { userCommand } = req.body;

    try {
      // Execute command without input validation
      exec(userCommand, (error, stdout, stderr) => {
        if (error) {
          // Return stderr on error
          res.status(500).send(stderr || "Command failed");
          return;
        }
        // Return command output
        res.send(stdout);
      });
    } catch (err) {
      // Insecure
      return res.status(500).send(err.message);
    }
  });
}

module.exports = {
  registerShellRoutes,
};
