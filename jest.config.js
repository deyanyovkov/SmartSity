module.exports = {
	verbose: true,
	roots: ['<rootDir>/src'],
	testPathIgnorePatterns: [
	  '<rootDir>/dist/',
	  'fixture',
	],
	transform: {
	  '^.+\\.tsx?$': 'ts-jest',
	},
	moduleFileExtensions: [
	  'js',
	  'json',
	  'jsx',
	  'node',
	  'ts',
	  'tsx',
	],
	coverageThreshold: {
	  global: {
		branches: 70,
		functions: 70,
		lines: 70,
	  },
	},
	preset: 'ts-jest',
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
	moduleNameMapper: {
	  "@/(.*)": "<rootDir>/src/$1"
	}
}