import Server from './clases/server';
import { SERVER_PORT } from './global/environment';

const server = new Server();

server.start(() => {
    console.log('El servidor esta corriendo en el puerto ' + server.port);
} )