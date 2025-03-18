import Sequelize, {Model} from "sequelize";
import appConfig from "../config/app.Config";


export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Cannot be empty'
          }
        }
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Cannot be empty'
          }
        }
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`
        }
      },
    }, {
      sequelize,
      tableName: 'photos',
    });
    return this;
  }
  static associate(models) {
    this.belongsTo(models.student, { foreignKey: 'student_id' });
  }
}
