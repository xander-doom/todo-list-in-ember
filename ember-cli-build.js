'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    fingerprint: {
      prepend: 'https://your-username.github.io/your-repo-name/',
    },
  });

  app.import('node_modules/todomvc-common/base.css');
  app.import('node_modules/todomvc-app-css/index.css');

  return app.toTree();
};
