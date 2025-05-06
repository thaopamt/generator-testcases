module.exports = {
  //   TARGET_LANGUAGE: "cpp", // 'cpp' hoặc 'python'
  TARGET_LANGUAGE: "python",
  TOTAL_TESTCASES: 10,
  SUBTESTS: [
    { proportion: 0.4, minN: 1, maxN: 100000 },
    { proportion: 0.4, minN: 100000, maxN: 5000000 },
    { proportion: 0.2, minN: 5000000, maxN: 200000000 },
  ],
  PATHS: {
    cpp: "program.cpp",
    python: "program.py",
    executable: "./program",
  },
};
