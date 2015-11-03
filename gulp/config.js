'use strict';
var path = require('path');
var modRewrite = require('connect-modrewrite');

// Default paths
var app = 'app';
var tmp = '.tmp';
var dist = 'dist';
var bowerDir = 'bower_components';

// Default paths in app folder
var data = 'data';
var fonts = 'fonts';
var icons = 'icons';
var images = 'images';
var scripts = 'scripts';
var styles = 'styles';
var views = 'views';

// Rewrite rules enables removing .html extensions in development.
// This are possible routes for same test.html file:
// http://localhost:3000/test.html
// http://localhost:3000/test
var rewriteRules = [
  '^/$ - [L]', // default site root handling (index.html)
  '.html$ - [L]', // ignore routes ends with '.html'
  '(.*)/$ $1/index.html [L]', // routes with trailing slash are directories -> rewrite to directory index.html
  '\\/\[a-zA-Z0-9_\\-\@.]+\\.\[a-zA-Z0-9]+$ - [L]', // ignore files with extension (eg. .css, .js, ...)
  '(.*)$ $1.html [L]' // redirect routes ends with string without trailing slash to original html
];

// Templates task config
module.exports.templates = {
  src: path.join(app, views, '*.jade'),
  srcBuild: path.join(tmp, 'jade/*.jade'),
  dest: tmp,
  destBuild: path.join(dist),
  cfg: {
    pretty: true,
    compileDebug: true
  }
};

// TemplatesData task config
module.exports.templatesData = {
  src: path.join(app, views, data, '/**/*.json'),
  dest: app + '/views',
  dataName: 'data.json',
  dataPath: path.join(app, views, 'data.json')
};

// Styles task config
module.exports.styles = {
  src: path.join(app, styles, '*.scss'),
  dest: path.join(tmp,styles),
  sassCfg: {
    sourcemap: true,
    style: 'expanded',
    lineNumbers: true
  },
  autoprefixerCfg: {browsers: ['last 2 version']}
};

// Watch task config
module.exports.watch = {
  styles: path.join(app, styles, '/**/*.scss'),
  jade: [
    path.join(app, views, '/**/*.jade'),
    path.join(app, views, data, '/**/*.json')
  ],
  // scripts: path.join(app, scripts, '/**/*.js'),
  // wiredep: 'bower.json'
};

// Browser sync task config
module.exports.browserSync = {
  dev: {
    server: {
      baseDir: [tmp, app],
      routes: {
        '/bower_components': bowerDir
      }
    },
    notify: false,
    debugInfo: false,
    host: 'localhost',
    middleware: [
      modRewrite(rewriteRules)
    ]
  },
  dist: {
    server: {
      baseDir: dist
    },
    notify: false,
    debugInfo: false,
    host: 'localhost',
    middleware: [
      modRewrite(rewriteRules)
    ]
  }
};
