/* Llamamos al paquete express para obtener todas sus funcionalidades.*/
var express = require('express'); 

/*
En la variable funciones guardamos todas las funcionalidades que se 
obtienen de la variable express*/
var funciones= express();

/*
Usamos la variable express y el método static que posee express para definir el nombre 
de la carpeta de estáticos (donde hemos guardado el html, el css...)
Utilizamos app.use() para que esta configuración sea iniciada.
*/
funciones.use('/public', express.static(__dirname));

/* 
Usamos el método get para la obtención del contenido.
Como queremos que el servidor reaccione si entramos desde la raíz del dominio, ponemos ('/')
El método “get” usa un callback donde recibe los objetos para hacer las respuestas y obtener 
solicitudes. 
Para que el servidor envie un mensaje usamos el objeto response  y el método send para enviar 
el mensaje 
*/
funciones.get('/', function(request, response){
	response.sendFile(__dirname + '/index.html');
})

/*
El servidor se iniciará en el puerto 3000 (usamos el método listen) y enviará el mensaje mediante
un callback.
*/
funciones.listen(3000, function(){
	console.log('Server express ready!');
})

