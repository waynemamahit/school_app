import { describe, expect, it } from 'vitest';
import authRoute from '../routes/auth.route';
import AuthSpec from './models/auth.spec-model';

describe('Auth Features', () => {
  const auth = new AuthSpec(authRoute);
  const getMessage = async (response: Response) =>
    (await response.json())?.message ?? '';

  it('should be get hello', async () => {
    const response = await auth.getHello();
    expect(response.status).toBe(200);
    expect(await getMessage(response)).toBe('Hello!');
  });

  it('should be say hello', async () => {
    const response = await auth.sayHello();
    expect(response.status).toBe(200);
    expect(await getMessage(response)).toBe('Hello!');
  });
  
  it('should not be say hello', async () => {
    const response = await auth.sayHello({});
    expect(response.status).toBe(400);
  });
  
  it('should be say hi', async () => {
    const response = await auth.sayHi();
    expect(response.status).toBe(200);
    expect(await getMessage(response)).toBe('Hi!');
  });
});
