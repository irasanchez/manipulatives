const injectDevServer = require("@cypress/react/plugins/react-scripts");

module.exports = (on, config) => {
    injectDevServer(on, config);
    return config;
};
// https://www.cypress.io/blog/2021/04/06/cypress-component-testing-react/
