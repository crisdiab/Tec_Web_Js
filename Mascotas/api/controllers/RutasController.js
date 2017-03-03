/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  home: function (req, res) {

    return res.view('vistas/home', {
      titulo: 'Inicio',
      title: 'Inicio',
      numero: 1,
      mauricio: {
        nombre: 'Homero',
        cedula: 1718137159
      },
      usuarios: []
    })
  },
  crearUsuario: function (req, res) {
    return res.view('vistas/crearUsuario', {
      title: 'Crear Usuarios'
    })
  },
  editarUsuario: function (req, res) {

    var parametros = req.allParams();
    console.log(parametros);
    if (parametros.id) {

      Usuario.findOne({
        id: parametros.id
      }).exec(function (error, usuarioEncontrado) {
        if (error) return res.serverError()
        return res.view('vistas/editarUsuario', {
          usuario: usuarioEncontrado
        })
      });

    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No existe el ID'
        }
      });
    }
  },
  listarUsuarios: function (req, res) {

    Usuario.find().exec(function (error, usuariosEncontrados) {
      if (error) return res.serverError()
      sails.log.info(usuariosEncontrados);
      return res.view('vistas/listarUsuarios', {
        usuarios: usuariosEncontrados
      })
    });
  },
  crearMascota: function (req, res) {
    Raza.find().exec(function (error, razasEncontrados) {
      if (error) return res.serverError();
      return res.view('vistas/Mascota/crearMascota', {
        razas: razasEncontrados
      });
    });

  },
  editarMascota: function (req, res) {

    var parametros = req.allParams();
    if (parametros.id) {
      Mascota.findOne({
        id: parametros.id
      }).exec(function (error, mascotaEncontrado) {
        if (error) return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'Fallo al buscar la mascota',
            url: '/crearMascotas'
          }
        });


        Raza.find().exec(function (error, razasEncontrados) {
          if (error) return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'Fallo al buscar la mascota',
              url: '/crearMascotas'
            }
          });

          return res.view('vistas/Mascota/editarMascota', {
            title: 'Editar Mascota - ' + mascotaEncontrado.nombre,
            mascota: mascotaEncontrado,
            razas: razasEncontrados
          })
        });

      });

    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No existe el ID'
        }
      });
    }
  },
  listarMascotas: function (req, res) {

    Mascota.find().exec(function (error, mascotasEncontrados) {
      if (error) return res.serverError()
      return res.view('vistas/Mascota/listarMascotas', {
        mascotas: mascotasEncontrados
      })
    });
  },
  crearRaza: function (req, res) {


    return res.view('vistas/Raza/crearRaza')
  },
  listarRazas: function (req, res) {

    Raza.find().exec(function (error, razasEncontrados) {
      if (error) return res.serverError()
      return res.view('vistas/Raza/listarRazas', {
        razas: razasEncontrados
      })
    });
  }
};
