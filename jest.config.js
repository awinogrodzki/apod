module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: 'node',
  globals: {
    "ts-jest": {
      "tsconfig": "<rootDir>/tsconfig.test.json"
    }
  },
  setupFilesAfterEnv: [
    "<rootDir>/test/setup.ts"
  ]
};