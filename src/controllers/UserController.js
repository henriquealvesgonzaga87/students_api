import user from '../models/User'


class UserController {
  async store(req, res) {
    try {
      const newUser = await user.create(req.body);
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
      const users = await user.findAll({attributes: ['id', 'name', 'email']});
      return res.json(users);
    } catch{
      return res.json(null)
    }
  }

  async show(req, res) {
    try {
      const query_user = await user.findByPk(req.params.id);

      const {id, name, email} = query_user;
      return res.json({id, name, email});
    } catch{
      return res.json(null)
    }
  }

  async update(req, res) {
    try{
        const query_user = await user.findByPk(req.userId);

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
      const query_user = await user.findByPk(req.userId);

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

export default new UserController();
