export default {
    collectCoverageFrom: ["src/**/*.ts", "!src/**/index.ts", "!src/**/types/**"],
    testPathIgnorePatterns: ["/node_modules/", "<rootDir>/path/to/ignore/"],
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 80,
        statements: 80,
      },
    },
    roots: ["<rootDir>/src"],
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: [
      "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    moduleNameMapper: {
      "@/(.*)": "<rootDir>/src/$1",
    },
  };
  