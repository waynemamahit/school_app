import { SayHelloDto } from '@/validations/auth.validation';
import { AuthMock } from '../mocks/auth.mock';
import BaseSpec from './base.spec-model';

export default class AuthSpec extends BaseSpec {
  mock = new AuthMock();

  sayHello = async (dto: SayHelloDto | object = this.mock.sayHello) =>
    await this.app.request('/hello', {
      method: 'POST',
      body: JSON.stringify(dto),
    });
}
