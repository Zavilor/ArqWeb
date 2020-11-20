# ArqWeb
Repositorio para Arquitectura Web - UP

Nombre del grupo: JDM - Cars
Integrantes: Agustín Blum - Rettori Juan

Descripción del negocio: 

Somos una empresa dedicada a la promoción y compra-venta de vehículos del mercado Japonés. 
Ofrecemos el servicio de publicación y exposición de sus automóviles para fomentar el comercio de los mismos.
Brindamos un espacio donde podrán encontrarse con unidades exclusivas de marcas japonesas.

Páginas de referencia:

- www.mercadolibre.com.ar
- www.deautos.com
- www.demotores.com.ar

Endpoints:

/user/login                                     GET (Muestra el formulario de login)
/user/login                                     POST (Manda los datos ingresados al servidor)
/user/register                                  GET (Muestra el formulario de registro)
/user/register                                  POST (Manda los datos ingresados al servidor)
/user/profile/edit                              GET (Muestra la información del usuario para editar)
/user/profile/update                            PUT (Manda por PUT los nuevos datos para actualizar)
/user/delete                                    DELETE (Manda la solicitud de delete al servidor, sobre el email indicado)

/car/create                                     GET
/car/create                                     POST
/car/list                                       GET
/car/detail                                     GET
/car/update                                     PUT
/car/delete                                     DELETE

/news                                           GET

/help                                           GET
