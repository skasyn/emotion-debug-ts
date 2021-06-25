// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",
    defaultNS: "translations",
  },
  localePath: path.resolve("./public/locales"),
};
