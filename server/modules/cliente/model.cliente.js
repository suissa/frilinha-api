/**
 * Created by leonardoribeiro on 11/3/16.
 */
module.exports = (sequelize, DataType) => {

  const cliente = sequelize.define('cliente', {
    cl_cod:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    cl_razao:{
      type:DataType.STRING,
      unique: true,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    cl_codinterno:{
      type:DataType.STRING,
      allowNull:true,
      validate:{
        notEmpty:false
      }
    },
    cl_cnpjcpf:{
      type:DataType.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    cl_fone:{
      type:DataType.STRING,
      allowNull:true,
      validate:{
        notEmpty:false
      }
    },
    cl_email:{
        type:DataType.STRING,
        allowNull:true,
        validate:{
            notEmpty:false
        }
    }
  },{
      timestamps: false
  });
  const contato = sequelize.import('./model.contato');
  cliente.hasMany(contato);
  return cliente;
}