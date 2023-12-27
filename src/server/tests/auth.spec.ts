import { describe, expect, test } from 'vitest';
import authRoute from '../routes/auth.route';
import AuthSpec from './models/auth.spec-model';

describe('Auth Features', () => {
  const auth = new AuthSpec(authRoute);

  test('should be ok', async () => {
    const response = await auth.sayHello();

    expect(response.status).toBe(200);
  });

  test('should not be ok', async () => {
    const response = await auth.sayHello({});

    expect(response.status).toBe(400);
  });
});
