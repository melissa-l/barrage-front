/**
 * Created by qoder on 16-12-18.
 */
'use strict';
// require('./setup');
const path = require('path');
const koa = require('koa');
const views = require('co-views');
const router = require('koa-router')();
const html = require('./dist/assets/server');

const app = koa();
const render = views(path.join(__dirname, './dist/'), {
  map: {
    html: 'ejs'
  }
})

router.get("*", function*(next) {
  "use strict";
  let cxt = this;
  // console.log()
  if (this.request.url === '/favicon.ico') {
    yield next;
  }
  // this.set('Content-Type', 'text/html');
  this.body = yield render('index', {_html: html.default(cxt)})
})

app.use(router.routes())

app.listen(8080);
