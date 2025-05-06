const fs = require("fs").promises;
const path = require("path");
const config = require("./config");
const { runProgram } = require("./utils");

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function distributeTestCases() {
  let counts = config.SUBTESTS.map((sub) =>
    Math.floor(config.TOTAL_TESTCASES * sub.proportion)
  );

  let remaining = config.TOTAL_TESTCASES - counts.reduce((a, b) => a + b, 0);
  for (let i = 0; remaining > 0; i = (i + 1) % counts.length) {
    counts[i]++;
    remaining--;
  }
  return counts;
}

async function generateTestCases() {
  const testCasesDir = path.join(__dirname, "../testcases");
  await fs.mkdir(testCasesDir, { recursive: true });

  const counts = distributeTestCases();
  let caseNumber = 1;

  for (const [index, subtest] of config.SUBTESTS.entries()) {
    for (let j = 0; j < counts[index]; j++) {
      const a = randomInRange(subtest.minN, subtest.maxN);
      const b = randomInRange(a, subtest.maxN);
      const input = `${a} ${b}`;
      const output = await runProgram(input);

      await fs.writeFile(path.join(testCasesDir, `${caseNumber}.inp`), input);
      await fs.writeFile(path.join(testCasesDir, `${caseNumber}.out`), output);

      console.log(`Tạo thành công test case ${caseNumber}`);
      caseNumber++;
    }
  }
}

module.exports = generateTestCases;
