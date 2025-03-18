"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(req, res) {
    res.json({
      msg: "Hello world!"
    });
  }
}

exports. default = new HomeController();
