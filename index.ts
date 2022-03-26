import Server from './clases/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

// Se inicializa el servidor
const server = new Server();

// Se configura el body parser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

// Se configura el cors
server.app.use(cors({origin: true, credentials: true}));

// Se mandan las rutas
server.app.use('/', router);

server.start(() => {
    console.log('El servidor esta corriendo en el puerto ' + server.port);
} )