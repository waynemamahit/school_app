import { describe, expect, test } from 'vitest';
import authRoute from '../routes/auth.route';

describe('Auth features', () => {
  test('should be ok', async () => {
    const response = await authRoute.request('/hello', {
      method: 'POST',
      body: JSON.stringify({ name: 'waney', address: 'manado' }),
    });
    
    expect(response.status).toBe(200);
  });
});
