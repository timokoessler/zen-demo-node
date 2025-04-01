const { registerPetRoutes } = require("./pets");
const { registerShellRoutes } = require("./execute");
const { registerRequestRoutes } = require("./request");
const { registerFileRoutes } = require("./files");

function initApi(app) {
  registerPetRoutes(app);
  registerShellRoutes(app);
  registerRequestRoutes(app);
  registerFileRoutes(app);
}

module.exports = {
  initApi,
};
