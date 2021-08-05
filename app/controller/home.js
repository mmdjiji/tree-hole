'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.nj');
  }

  async lookup() {
    const { ctx } = this;
    ctx.body = JSON.stringify(await ctx.service.api.lookup(ctx.request.body.load));
  }

  async post() {
    const { ctx } = this;
    
    let result = await ctx.service.api.post(ctx.request.body.text, ctx.request.ip);
    ctx.body = JSON.stringify({
      result: result
    });
  }
}

module.exports = HomeController;
