import express from 'express';
import { SERVER_PORT } from '../global/environment';


export default class Server {

    public app: express.Application;
    public port: number = SERVER_PORT;

    constructor() {
        this.app = express();
    }

    start( llamada: any ) {
        this.app.listen(this.port, llamada);
    }
}