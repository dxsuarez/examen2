module.exports = {

  attributes: {

    id: {
      type: 'number',
      required: false,
      unique: true,
      autoIncrement: true
    },

    nombre: {
      type: 'string',
      required: true
    },

    anioLanzamiento: {
      type: 'number',
      required: true
    },

    rating: {
      type: 'number',
      required: true
    },

    actoresPrincipales: {
      type: 'string',
      required: false
    },

    sinopsis: {
      type: 'string',
      required: false
    },

    disponible: {
      type: 'boolean',
      required: true
    },

    urlImagen: {
      type: 'string',
      required: false
    },

    actor: {
      model: 'Actor'
    }

  },

};
