/**
 * Created by leonardoribeiro on 11/3/16.
 */

"use strict";
module.exports = (sequelize, DataType) => {

    var instrumento = sequelize.define('instrumento', {
        ins_cod:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        ins_prcod:{
            type:DataType.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_prsdcond:{
            type:DataType.INTEGER,
            allowNull:true,
            validate:{
                notEmpty:false
            }
        },
        ins_pecod:{
            type:DataType.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_prdescricao:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_prdtinc:{
            type:DataType.DATE,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_prativo:{
            type:DataType.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_localservico:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_tag:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_nro_serie:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_periodicidade:{
            type:DataType.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_dtult:{
            type:DataType.DATEONLY,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_dtprox_calibracao:{
            type:DataType.DATEONLY,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_nro_certificacao:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_observacao:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_marca:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_dtinc:{
            type:DataType.DATE,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_dtalt:{
            type:DataType.DATE,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_usuario:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_codinterno:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_compdescricao:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_localizacao:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_modelo:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_setor:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_pontos:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_resolucao:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_aceitacao:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        ins_tolerancia:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        }
    },{
        timestamps: false
    });

    return instrumento;
}