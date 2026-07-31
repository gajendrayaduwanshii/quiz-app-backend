'use strict';

module.exports = () => async (ctx, next) => {
  await next();

  if (ctx.path === '/admin' || ctx.path.startsWith('/admin/')) {
    ctx.set('Cache-Control', 'no-store, max-age=0');
  }
};
