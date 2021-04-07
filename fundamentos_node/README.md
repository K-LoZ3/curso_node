#### Herramientas para ser más felices: Nodemon y PM2
###### Desarrollo
Nodemon. Demons en linux, puedes tener procesos que ves ejecutandose nodemon + archivo al que quiero acceder detecta cambios, y ejecuta automaticamente el código.
   ~~~
   sudo npm install -g nodemon
   ~~~
#### Producción
   ~~~
   sudo npm install -g pm2
   ~~~
PM2 Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicación 24/7. Voy a poder monitorizar el código para saber si algo se rompe. Me permite ver dashboards de mi código, puedo ver que está corriendo. Puedo ver el rendimiento de mi cpu Con: 
   ~~~
   pm2 stop id
   ~~~
me detiene el proceso que está en ejecución con ese ID. El id es un numero.
#### Debugger de node
Para entrar en el debugger nadamas debemos ejecutar node con un parametro adicional.
   ~~~
   node --inspect "nombre del archivo o ruta sin comillas"
   ~~~
Con nodemon seria.
   ~~~
   nodemon --inspect "nombre del archivo o ruta sin comillas"
   ~~~
Con esto ejecutamos el servidor o la pagina en dos rutas. La primera es el debugger y la segunda es la pagina como tal.
Para entrar en la primera vamos al navegador y entramos en ~edge://inspect~ si es en edge y ~chrome://inspect~ en chrome.
Luego entramos en ~Open dedicated DevTools for Node~, o directamente entramos a inspect en la pestaña de Target si aparece el proyecto en ejecucion.