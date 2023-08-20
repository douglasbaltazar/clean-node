/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

// import type { Config } from 'jest'

// const config: Config = {
//   roots: ['<rootDir>/src'],
//   collectCoverage: true,
//   collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
//   coverageDirectory: 'coverage',
//   coverageProvider: 'v8',
//   testEnvironment: 'node',
//   transform: {
//     '.+\\.ts$': 'ts-jest'
//   },
//   testMatch: ['**/*.spec.ts']
// }

// export default config

// const config = require('./jest.config')
// config.testMatch = ['**/*.spec.ts']
// module.exports = config

import { Config } from 'jest'
// import * as globalConfig from './jest.config'

const config: Config = {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  testMatch: ['**/*.spec.ts'],
  preset: '@shelf/jest-mongodb'
}

export default config
