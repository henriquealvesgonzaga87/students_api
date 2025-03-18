import jwt from 'jsonwebtoken'
import user from '../models/User'


export default async (req, res, next) => {
  const {authorization } = req.headers;

  if(!authorization){
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try{
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const {id, email} = dados;

    const query_user = await user.findOne({
      where: {
        id,
        email,
      },
    })

    if(!query_user){
      return res.status(401).json({
        errors: ['Invalid user'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch {
      return res.status(401).json({
        errors: ['Token expired or invalid'],
      });
  }

};
