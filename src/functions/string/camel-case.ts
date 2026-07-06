/**
 * Converts string to camelCase
 * @param str - The string to convert
 * @returns String in camelCase format
 * @example
 * camelCase('hello-world-foo') // → 'helloWorldFoo'
 * camelCase('hello_world_foo') // → 'helloWorldFoo'
 * camelCase('HELLO WORLD FOO') // → 'helloWorldFoo'
 */
export default function camelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, char: string | undefined) => (char ? char.toUpperCase() : ''))
    .replace(/^(.)/, (char) => char.toLowerCase());
}
