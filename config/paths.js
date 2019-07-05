const fs = require("fs");
const path = require("path");
const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  actions: resolvePath("src/app/actions"),
  features: resolvePath("src/app/features"),
  index: resolvePath("src/app/index"),
  core: resolvePath("src/app/core"),
  utils: resolvePath("src/app/utils"),
  root: resolvePath(""),
  src: resolvePath("src")
};
