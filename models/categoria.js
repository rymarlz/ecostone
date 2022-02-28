const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    codigoFsl:{
        type: String,
        required:[true, 'El codigoFsl es obligatorio'],
        unique:true
    },
    codigoEcostone:{
        type: String,
        required: [true, 'El codigoEcostone es obligatorio'],
        unique: true
    },
    modelo:{
        type: String,
        required: [true, 'El modelo es obligatorio'],
        unique: true
    }
});


CategoriaSchema.methods.toJSON = function() {
    const { __v, estado, ...data  } = this.toObject();
    return data;
}


module.exports = model( 'Categoria', CategoriaSchema );
