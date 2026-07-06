/**
 * Converts string to snake_case
 * @param str - The string to convert
 * @returns String in snake_case format
 * @example
 * snakeCase('helloWorldFoo') // → 'hello_world_foo'
 * snakeCase('hello-world-foo') // → 'hello_world_foo'
 */
export default function snakeCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '_$1')
    .replace(/[-\s]+/g, '_')
    .toLowerCase()
    .replace(/^_/, '');
}
