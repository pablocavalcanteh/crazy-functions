import { snakeCase } from '@/functions';

describe('snakeCase', () => {
  it('should convert camelCase to snake_case', () => {
    expect(snakeCase('helloWorldFoo')).toBe('hello_world_foo');
  });

  it('should convert kebab-case to snake_case', () => {
    expect(snakeCase('hello-world-foo')).toBe('hello_world_foo');
  });

  it('should preserve snake_case words', () => {
    expect(snakeCase('hello_world_foo')).toBe('hello_world_foo');
  });
});
