import { type Config } from 'jest';
import nextJest from 'next/jest';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const createJestConfig = nextJest({
  dir: './'
});

export const config = {
  cache: false,
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths)
  },
  passWithNoTests: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '<rootDir>/src/**/__tests__/(integration|unit)/**/*.(test|spec).(ts|tsx)'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  workerIdleMemoryLimit: '512MB'
} as Config;

export default createJestConfig(config);
