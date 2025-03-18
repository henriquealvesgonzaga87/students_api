"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);


class UserController {
  async store(req, res) {
    try {
      const newUser = await _User2.default.create(req.body);
      const {id, name, email} = newUser;
      return res.json({id, name, email});
    } catch(e){
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  async index(req, res) {
    try {
      const users = await _User2.default.findAll({attributes: ['id', 'name', 'email']});
      return res.json(users);
    } catch (e2){
      return res.json(null)
    }
  }

  async show(req, res) {
    try {
      const query_user = await _User2.default.findByPk(req.params.id);

      const {id, name, email} = query_user;
      return res.json({id, name, email});
    } catch (e3){
      return res.json(null)
    }
  }

  async update(req, res) {
    try{
        const query_user = await _User2.default.findByPk(req.userId);

        if(!query_user){
          return res.status(404).json({
            errors: ["User doesn't exist"],
          });
        }

        const updatedUser = await query_user.update(req.body)
        const {id, name, email} = updatedUser;
        return res.json({id, name, email});

    } catch(e){
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  async delete(req, res) {
    try {
      const query_user = await _User2.default.findByPk(req.userId);

      if(!query_user){
        return res.status(404).json({
          errors: ["User doesn't exist"],
        });
      }

      await query_user.destroy();
      return res.status(204).json({
        msg: "user deleted successfully"
      });

    } catch(e){
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

}

exports. default = new UserController();
