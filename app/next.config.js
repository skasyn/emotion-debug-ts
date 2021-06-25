// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  env: {
    API_URL: process.env.API_URL,
  },
  eslint: {
    // code is already linted during CI
    ignoreDuringBuilds: true,
  },
};
