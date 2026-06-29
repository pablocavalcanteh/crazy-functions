import { debounce } from '@/functions';

describe('debounce', () => {
  it('should delay function execution', (done) => {
    let callCount = 0;
    const fn = () => {
      callCount++;
    };
    const debounced = debounce(fn, 50);

    debounced();
    debounced();
    debounced();

    expect(callCount).toBe(0);

    setTimeout(() => {
      expect(callCount).toBe(1);
      done();
    }, 100);
  });
});
