/**
 * Created by leonardoribeiro on 11/3/16.
 */
module.exports = (sequelize, DataType) => {

    const calibracao = sequelize.define('calibracao', {
        cal_cod:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        cal_datacalibracao:{
            type:DataType.STRING,
            allowNull:true,
            validate:{
                notEmpty:false
            }
        },
        cal_certificado:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        cal_periodicidade:{
            type:DataType.DATEONLY,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        cal_laudofinal:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        }
    },{
        timestamps: false
    });
    //const validacao = sequelize.import('./model.validacao');
    //calibracao.hasMany(validacao);
    //const calibracao_padroes = sequelize.import('./model.calibracao_padroes');
    //calibracao.belongsTo(calibracao_padroes);
    // const calibracao_item = sequelize.import('./model.calibracao_item');
    // calibracao.hasMany(calibracao_item, {
    //     foreignKey: 'ins_cod',
    //     targetKey: 'cal_inst_cod',
    //     allowNull:true,
    //     // unique:true
    // });
    // calibracao.hasMany(calibracao_item, {as: 'itens'})

    const instrumento = sequelize.import('../instrumento/model.instrumento')
    calibracao.hasOne(instrumento, {
        foreignKey: 'ins_cod',
        targetKey: 'cal_inst_cod',
        allowNull:true,
        unique:true
    })
    return calibracao;
}
