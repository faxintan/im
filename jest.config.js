module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [ '<rootDir>/tests' ],
  testMatch: [ '**/*.test.ts' ],
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx' ],
  // setupFiles: ["jest-localstorage-mock"],
};