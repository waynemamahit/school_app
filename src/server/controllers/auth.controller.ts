import { SayHelloDto } from '@/validations/auth.validation';
import { Context } from 'hono';
import { AuthService } from '../services/auth.service';

export default class AuthController {
  service = new AuthService();

  getHello = async (c: Context) =>
    c.json({
      message: this.service.getHello(),
    });

  sayHello = async (c: Context) =>
    c.json({
      data: c.get('dto') as SayHelloDto,
      message: this.service.getHello(),
    });

  sayHi = async (c: Context) =>
    c.json({
      message: 'Hi!',
      data: await c.req.json(),
    });
}
