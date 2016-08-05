const Nodest = require("nodest");

const KoaBodyParser = require("koa-body-parser");
const KoaCors = require("kcors");

class CommonMiddleware extends Nodest.Middleware {
  use() {
    return [ KoaBodyParser(), KoaCors() ];
  }
}

module.exports = CommonMiddleware;