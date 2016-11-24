/**
 * Created by leonardoribeiro on 11/3/16.
 */
module.exports = (sequelize, DataType) => {

    const calibracao_item = sequelize.define('calibracao_item', {
        ci_cod:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        ci_titulo:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ci_vm:{
            type:DataType.DECIMAL,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ci_vr:{
            type:DataType.DECIMAL,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ci_erro:{
            type:DataType.DECIMAL,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ci_incerteza:{
            type:DataType.DECIMAL,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ci_unidade:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ci_erro_incerteza:{
            type:DataType.DECIMAL,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ci_criterio_aceitacao:{
            type:DataType.DECIMAL,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ci_situacao:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        }
    },{
        timestamps: false
    });
    const calibracao = sequelize.import('./model.calibracao');
    calibracao_item.hasOne(calibracao,{
        foreignKey:'cal_cod',
        targetKey:'ci_cal_cod'
    });
    return calibracao_item;
}

