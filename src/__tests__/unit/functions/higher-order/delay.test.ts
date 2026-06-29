import { delay } from '@/functions';

describe('delay', () => {
  it('should return a promise that resolves after delay', async () => {
    const start = Date.now();
    await delay(50);
    const elapsed = Date.now() - start;
    expect(elapsed).toBeGreaterThanOrEqual(45);
  });
});
