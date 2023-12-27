import { Hono } from 'hono';
import AuthController from '../controllers/auth.controller';

const authRoute = new Hono();

const controller = new AuthController();

authRoute.get('/hello', controller.getHello);
authRoute.post('/hello', controller.sayHello);
authRoute.post('/hi', controller.sayHi);
// authRoute.post('/login')
// authRoute.post('/register')

export default authRoute;
