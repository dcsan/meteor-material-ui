Package.describe({
  name: 'markoshust:material-ui',
  version: '0.13.1',
  summary: 'Package that contains the React implementation of Google Material Design',
  git: 'https://github.com/markoshust/meteor-material-ui',
  documentation: 'README.md'
});

Npm.depends({
  'externalify': '0.1.0',
  'material-ui': '0.13.1',
  'react-tap-event-plugin': '0.2.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('cosmos:browserify@0.8.1');
  api.addFiles([
    'app.browserify.js',
    'app.browserify.options.json',
    'startup.js'
  ]);
  api.export([
    'injectTapEventPlugin',
    'MoreVert',
    'mui'
  ]);
});