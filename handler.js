'use strict';
//Cargamos el paquete querystring
const queryString = require('querystring');

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        //message: 'Hola Mundo!',
        //para dar un mensaje con el parametro de la ruta
        message: `Hola ${event.pathParameters.name}`,
        input: event.name,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

//Funcion post
module.exports.showUser = async event => {
  //Utlizando el querystring
  const body = queryString.parse(event['body']);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        //message: 'Hola Mundo!',
        //para dar un mensaje con el parametro de la ruta
        message: `Esta es una petición post`,
        //Para enviar con metodo post se debecolocar ['body']
        input: `Hola ${body.name} ${body.lastname}`,
      },
      null,
      2
    ),
  };

};
