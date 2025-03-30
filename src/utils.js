const { exec, spawn } = require("child_process");
const fs = require("fs").promises;
const path = require("path");
const config = require("./config");

async function compileCode() {
  if (config.TARGET_LANGUAGE === "cpp") {
    return new Promise((resolve, reject) => {
      exec(`g++ ${config.PATHS.cpp} -o ${config.PATHS.executable}`, (error) => {
        error ? reject(`Biên dịch lỗi: ${error.message}`) : resolve();
      });
    });
  }

  if (config.TARGET_LANGUAGE === "python") {
    try {
      await fs.access(config.PATHS.python);
    } catch {
      throw new Error("Không tìm thấy file Python");
    }
  }
}

function runProgram(input) {
  const command =
    config.TARGET_LANGUAGE === "cpp"
      ? config.PATHS.executable
      : `python3 ${config.PATHS.python}`;

  return new Promise((resolve, reject) => {
    const process = spawn(command, [], { shell: true });
    let output = "";

    process.stdout.on("data", (data) => (output += data.toString()));
    process.stderr.on("data", (data) =>
      reject(`Lỗi thực thi: ${data.toString()}`)
    );
    process.on("error", (error) =>
      reject(`Không thể chạy chương trình: ${error.message}`)
    );

    process.on("close", (code) => {
      code !== 0
        ? reject(`Chương trình thoát với mã ${code}`)
        : resolve(output.trim());
    });

    process.stdin.write(input);
    process.stdin.end();
  });
}

module.exports = { compileCode, runProgram };
