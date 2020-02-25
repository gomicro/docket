module.exports = {
  globals: {},

  collectCoverage: false,
  coveragePathIgnorePatterns: [
    '.storybook',
    'story.js$',
    'test.js$',
    'fileMock.js',
  ],

  moduleNameMapper: {
    '\\.(png|svg)$': '<rootDir>/test/fileMock.js',
  },

  testMatch: ['<rootDir>/.storybook/storyshots.js'],

  modulePathIgnorePatterns: ['<rootDir>/node_modules'],

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
}
