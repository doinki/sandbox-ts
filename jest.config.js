const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: '.' });

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const customJestConfig = {
  collectCoverageFrom: ['src/**/*.@(j|t)s?(x)'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src\\/types/',
  ],
  moduleNameMapper: {
    '^@/api(.*)': '<rootDir>/src/api$1',
    '^@/atoms(.*)': '<rootDir>/src/components/atoms$1',
    '^@/constants(.*)': '<rootDir>/src/constants$1',
    '^@/hooks(.*)': '<rootDir>/src/hooks$1',
    '^@/icons(.*)': '<rootDir>/src/components/atoms/icons$1',
    '^@/molecules(.*)': '<rootDir>/src/components/molecules$1',
    '^@/organisms(.*)': '<rootDir>/src/components/organisms$1',
    '^@/styles(.*)': '<rootDir>/src/styles$1',
    '^@/templates(.*)': '<rootDir>/src/components/templates$1',
    '^@/types(.*)': '<rootDir>/src/types$1',
    '^@/utils(.*)': '<rootDir>/src/utils$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
