const os = require('os');

// con .cpus imprimimos los cpus de la maquina para saber que tanto
// poder tiene la maquina y tomar decicion decisiones dependiendo
// de si cumple con lo necesario o no.
console.log('CPU info', os.cpus());

// Imprimimos para ver cuales interfaces de red hay.
console.log('IP address', os.networkInterfaces());
console.log('IP address', os.networkInterfaces().lo.map(i => i.address));
console.log('IP address', os.networkInterfaces().eth0.map(i => i.address));
console.log('Free memory', os.freemem()); // Memoria libre en bytes.
console.log('Type', os.type()); // Tipo de sistema operativo.
console.log('So version', os.release());
console.log('Usr info', os.userInfo());