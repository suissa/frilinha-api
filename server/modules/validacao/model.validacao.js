/**
 * Created by leonardoribeiro on 11/3/16.
 */
module.exports = (sequelize, DataType) => {

  const validacao = sequelize.define('validacao', {
    va_cod:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    va_cal_cod:{
      type:DataType.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    va_data:{
      type:DataType.DATEONLY,
      allowNull:true,
      validate:{
        notEmpty:false
      }
    },
    va_usuario:{
      type:DataType.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    va_us_cod:{
      type:DataType.INTEGER,
      allowNull:true,
      validate:{
        notEmpty:false
      }
    },
    va_situcao:{
        type:DataType.STRING,
        allowNull:true,
        validate:{
            notEmpty:false
        }
    }
  },{
      timestamps: false
  });
  const usuario = sequelize.import('./../usuario/model.usuario');
  validacao.belongsTo(usuario);
  return validacao;
}