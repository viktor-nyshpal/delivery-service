module.exports = {
  preset: 'ts-jest/presets/default-esm',

  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],

  testMatch: ['<rootDir>/test/**/*.spec.ts', '<rootDir>/test/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'node'],

  transformIgnorePatterns: ['/node_modules/'],

  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },

  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
};
