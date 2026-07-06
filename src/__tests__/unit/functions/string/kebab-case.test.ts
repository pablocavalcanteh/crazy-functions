import { kebabCase } from '@/functions';

describe('kebabCase', () => {
  it('should convert camelCase to kebab-case', () => {
    expect(kebabCase('helloWorldFoo')).toBe('hello-world-foo');
  });

  it('should convert snake_case to kebab-case', () => {
    expect(kebabCase('hello_world_foo')).toBe('hello-world-foo');
  });

  it('should preserve kebab-case words', () => {
    expect(kebabCase('hello-world-foo')).toBe('hello-world-foo');
  });
});
