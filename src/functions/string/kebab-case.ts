/**
 * Converts string to kebab-case
 * @param str - The string to convert
 * @returns String in kebab-case format
 * @example
 * kebabCase('helloWorldFoo') // → 'hello-world-foo'
 * kebabCase('hello_world_foo') // → 'hello-world-foo'
 */
export default function kebabCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '-$1')
    .replace(/[-_\s]+/g, '-')
    .toLowerCase()
    .replace(/^-/, '');
}
