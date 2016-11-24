/**
 * Created by leonardoribeiro on 11/3/16.
 */
module.exports = (sequelize, DataType) => {

    const calibracao_padroes = sequelize.define('calibracao_padroes', {
        pa_cod:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        pa_cal_cod:{
            type:DataType.INTEGER,
            primaryKey:true
        },
        pa_codigo:{
            type:DataType.STRING,
            allowNull:true,
            validate:{
                notEmpty:false
            }
        },
        pa_certificado:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        }
    },{
        timestamps: false
    });
    //const calibracao = sequelize.import('./model.calibracao');
    //calibracao_padroes.belongsTo(calibracao);
    return calibracao_padroes;
}