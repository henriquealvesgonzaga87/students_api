import dotenv from 'dotenv';
import {resolve} from 'path';
dotenv.config();

import './database';

import express from 'express'
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes'
import tokenRoutes from './routes/tokenRoutes'
import studentRoutes from './routes/studentRoutes'
import photoRoutes from './routes/photoRoutes'


const whiteList = [
  "https://www.studentsbackend.hagpythondev.com/",
  "http://localhost:3000"
];


const corsOptions = {
  origin: function(origin, callback) {
    if(whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
    this.app.use('/images/', (req, res, next) => {
      res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
      next();
    }, express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes(){
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/students/', studentRoutes);
    this.app.use('/photos/', photoRoutes);
  }
}

export default new App().app;
