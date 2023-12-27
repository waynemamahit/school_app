import { SayHelloDto } from '@/validations/auth.validation';
import { faker } from '@faker-js/faker';

export class AuthMock {
  sayHello: SayHelloDto = {
    name: faker.person.fullName(),
    address: faker.location.streetAddress(),
  };
}
