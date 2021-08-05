/* eslint valid-jsdoc: "off" */

'use strict';

const fs = require('fs');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1628119300895_5074';

  // add your middleware config here
  config.middleware = [];

  config.siteFile = {
    '/favicon.ico': fs.readFileSync('favicon.ico')
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
    }
  };

  config.static = {
    prefix: '/static', 
    dir: 'app/public',
    dynamic: true,
    preload: false,
    maxAge: 31536000,
    buffer: true
  };

  config.cluster = {
    listen: {
      path: '',
      port: 8000,
      hostname: '0.0.0.0',
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
