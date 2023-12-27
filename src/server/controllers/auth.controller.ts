import { Context } from 'hono';
import { AuthService } from '../services/auth.service';
import { sayHelloSchemaDto } from '@/validations/auth.validation';

export default class AuthController {
  service = new AuthService();

  getHello = async (c: Context) =>
    c.json({
      message: this.service.getHello(),
    });

  sayHello = async (c: Context) => {
    try {
      return c.json({
        data: await sayHelloSchemaDto.parseAsync(await c.req.json()),
        message: this.service.getHello(),
      });
    } catch (error) {
      return c.json({
        error
      })
    }
  }

  sayHi = async (c: Context) =>
    c.json({
      message: 'Hi!',
      data: await c.req.raw.json(),
    });
}
