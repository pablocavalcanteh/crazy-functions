export default {
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/__tests__/**',
    '!src/**/index.ts',
    '!src/types/**',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 80,
      statements: 80,
    },
  },
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/**/__tests__/unit/**/*.test.ts',
  ],
  cacheDirectory: '<rootDir>/.jest-cache',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
  