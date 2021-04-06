module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  coverageDirectory: "coverage",
  collectCoverage: true,
  collectCoverageFrom: ["src/*.vue", "src/scripts/*.js"],
  coverageReporters: ["lcov", "text"],
  coverageThreshold: {
    global: {
      functions: 80,
    },
  },
};
