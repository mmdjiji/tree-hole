'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/v1/lookup', controller.home.lookup);
  router.post('/api/v1/post', controller.home.post);
};
