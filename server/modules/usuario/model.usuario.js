/**
 * Created by leonardoribeiro on 11/3/16.
 */
module.exports = (sequelize, DataType) => {

  const usuario = sequelize.define('usuario', {
    us_cod:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    us_login:{
      type:DataType.STRING,
      allowNull:false,
      unique: true,
      validate:{
        notEmpty:true
      }
    },
    us_senha:{
      type:DataType.STRING,
      allowNull:true,
      validate:{
        notEmpty:false
      }
    },
    us_ativo:{
      type:DataType.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    }
  },{
      timestamps: false
  });
  return usuario;
}