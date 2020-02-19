module.exports = {
  roots: ['<rootDir>/src'],

  testMatch: ['**/tests/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],

  setupFilesAfterEnv: ['./jest.setup.js'],

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
};
