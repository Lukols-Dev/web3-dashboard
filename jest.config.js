module.exports = {
  testMatch: [
    "<rootDir>/src/__tests__/**/*.test.js",
    "<rootDir>/src/__tests__/**/*.test.ts",
    "<rootDir>/src/__tests__/**/*.test.jsx",
    "<rootDir>/src/__tests__/**/*.test.tsx",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/index.js",
    "!src/reportWebVitals.js",
    "!src/setupTests.js",
  ],
  coverageReporters: ["json", "lcov", "text", "clover"],
};
