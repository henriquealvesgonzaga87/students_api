import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Photo from '../models/Photo';


const upload = multer(multerConfig).single('photo');

class PhotoController {
  async store(req, res) {
    return upload(req, res, async (error) => {
      if(error) {
        return res.status(400).json({
          errors: [error.code]
        });
      }
      try {
        const {originalname, filename} = req.file;
        const {student_id} = req.body;
        const photo = await Photo.create({originalname, filename, student_id});

        return res.status(201).json(photo);
      } catch {
        return res.status(400).json({
          errors: ['Student does not exist']
        });
      }

    });
  }
}

export default new PhotoController();
