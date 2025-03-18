import Student from '../models/Student'
import Photo from '../models/Photo'


class StudentController{
  async index(req, res) {
    const students = await Student.findAll({
      attributes: ['id', 'name', 'surname', 'email', 'age', 'weight', 'height'],
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        model: Photo,
        attributes: ['id', 'url', 'filename']
      },
    });
    res.json(students);
  }

  async store(req, res) {
    try {
      const student = await Student.create(req.body);

      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try{
      const {id} = req.params;

      if(!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const student = await Student.findByPk(id, {
        attributes: ['id', 'name', 'surname', 'email', 'age', 'weight', 'height'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['id', 'url', 'filename']
        },
      });

      if(!student) {
        return res.status(404).json({
          errors: ['Student does not exist'],
        });
      }

      return res.json(student);

    } catch(e){
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try{
      const {id} = req.params;

      if(!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const student = await Student.findByPk(id);

      if(!student) {
        return res.status(404).json({
          errors: ['Student does not exist'],
        });
      }

      await student.destroy();
      return res.status(204).json({
        msg: "Deleted successfully"
      });

    } catch(e){
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try{
      const {id} = req.params;

      if(!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const student = await Student.findByPk(id);

      if(!student) {
        return res.status(404).json({
          errors: ['Student does not exist'],
        });
      }

      const updatedStudent = await student.update(req.body);

      return res.json(updatedStudent);

    } catch(e){
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new StudentController();
