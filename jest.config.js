const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: '.' });

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const customJestConfig = {
  collectCoverageFrom: ['src/**/*.@(j|t)s?(x)'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
    '^src/(.*)': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
