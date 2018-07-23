module.exports = {

  attributes: {

    id: {
      type: 'number',
      required: false,
      unique: true,
      autoIncrement: true
    },

    nombres: {
      type:'string',
      required:true
    },

    apellidos: {
      type:'string',
      required:true
    },

    fechaNacimiento: {
      type:'string',
      required:true
    },

    numeroPeliculas: {
      type:'number',
      required:true
    },

    retirado: {
      type:'boolean',
      required:true
    },

    urlImagen: {
      type: 'string',
      required: false
    },

    peliculas: {
      collection: 'Pelicula',
      via: 'actor'
    }

  },

};
