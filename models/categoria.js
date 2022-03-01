const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    codigo_fsl:{
        type: String,
        required:[true, 'El codigoFsl es obligatorio'],
        unique:true
    },
    codigo_ecostone:{
        type: String,
        required: [true, 'El codigoEcostone es obligatorio'],
        unique: true
    },
    modelo:{
        type: String,
        required: [true, 'El modelo es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true
    },
});


CategoriaSchema.methods.toJSON = function() {
    const { __v, estado, ...data  } = this.toObject();
    return data;
}


module.exports = model( 'Categoria', CategoriaSchema );
