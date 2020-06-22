module.exports = {
  testEnvironment: 'jest-environment-jsdom-global',
  testPathIgnorePatterns: ['/__mocks__/'],
  coveragePathIgnorePatterns: ['enzyme.js'],
  preset: 'react-native',
  setupFilesAfterEnv: ['./enzyme.js']
}

