module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(ts|tsx|js|jsx)?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/static/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'] // setupFiles before the tests are ran
}
