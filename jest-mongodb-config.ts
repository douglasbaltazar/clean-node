// import type { Config } from 'jest'

// const config: Config = {
//   roots: ['<rootDir>/src'],
//   collectCoverage: true,
//   collectCoverageFrom:
//   [
//     '<rootDir>/src/**/*.ts',
//     '!<rootDir>/src/domain/**/*.ts',
//     '!<rootDir>/src/**/**/*protocols.ts',
//     '!<rootDir>/src/**/protocols/*.ts',
//     '!<rootDir>/src/**/**/**/*-protocols.ts',
//   ],
//   coverageDirectory: 'coverage',
//   coverageProvider: 'v8',
//   testEnvironment: 'node',
//   transform: {
//     '.+\\.ts$': 'ts-jest'
//   },
//   preset: '@shelf/jest-mongodb'
//   // mongoDbMemoryServerOptions: {
//   //   instance: {
//   //     dbName: 'jest'
//   //   },
//   //   binary: {
//   //     version: '4.0.3',
//   //     skipMD5: true
//   //   },
//   //   autoStart: false,
//   // }
// }

// export default config

module.exports = {
  mongoDbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '4.0.3',
      skipMD5: true
    },
    autoStart: false
  }
}
