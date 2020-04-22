const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let categoriaSchema = new Schema({

    descripcion: {
        type: String,
        unique: true,
        required: [true, 'La descripcion es necesaria']
    },
  
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
});

//categoriaSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' });

module.exports = mongoose.model('Categoria', categoriaSchema);