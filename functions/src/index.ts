import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import * as rutas from './routes/routes';
;
const app = express();
app
   .use(cors())
   .use('/', rutas.default);

export const api = functions.https.onRequest(app);