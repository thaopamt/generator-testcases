module.exports = {
  TARGET_LANGUAGE: "cpp", // 'cpp' hoặc 'python'
  TOTAL_TESTCASES: 10,
  SUBTESTS: [
    { proportion: 0.3, minN: 1, maxN: 99 },
    { proportion: 0.3, minN: 100, maxN: 9999 },
    { proportion: 0.4, minN: 10000, maxN: 999999999 },
  ],
  PATHS: {
    cpp: "program.cpp",
    python: "program.py",
    executable: "./program",
  },
};
