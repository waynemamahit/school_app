import { Hono } from 'hono';
import { sayHelloSchemaDto } from '../../validations/auth.validation';
import AuthController from '../controllers/auth.controller';
import { validate } from '../middlewares/pipe.middleware';

const authRoute = new Hono();

const controller = new AuthController();

authRoute.get('/hello', controller.getHello);
authRoute.post('/hello', validate(sayHelloSchemaDto), controller.sayHello);
authRoute.post('/hi', controller.sayHi);
// authRoute.post('/login')
// authRoute.post('/register')

export default authRoute;
