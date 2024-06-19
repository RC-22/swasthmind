// 'use strict';

// /**
//  * sessioncard router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::sessioncard.sessioncard');

"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/sessioncards",
      handler: "sessioncard.find",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/sessioncards/:id",
      handler: "sessioncard.findById",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/sessioncards/slug/:slug",
      handler: "sessioncard.findBySlug",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
