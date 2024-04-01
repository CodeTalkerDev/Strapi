const strapi = require("@strapi/strapi");

if (process.env.NODE_ENV == "development")
  // @ts-ignore
  strapi({ autoReload: { enabled: true } }).start();
// @ts-ignore
else strapi().start();
