import { camelCase } from '@/functions';

describe('camelCase', () => {
  it('should convert kebab-case to camelCase', () => {
    expect(camelCase('hello-world-foo')).toBe('helloWorldFoo');
  });

  it('should convert snake_case to camelCase', () => {
    expect(camelCase('hello_world_foo')).toBe('helloWorldFoo');
  });

  it('should convert upper spaced text to camelCase', () => {
    expect(camelCase('HELLO WORLD FOO')).toBe('helloWorldFoo');
  });

  it('should handle trailing separators', () => {
    expect(camelCase('hello-world-')).toBe('helloWorld');
  });
});
