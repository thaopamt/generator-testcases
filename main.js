const { compileCode } = require("./src/utils");
const generateTestCases = require("./src/testGenerator");
const config = require("./src/config");

async function main() {
  try {
    console.log("🛠  Đang chuẩn bị môi trường...");
    await compileCode();

    console.log("✅ Chuẩn bị thành công!");
    console.log("🔨 Đang sinh test cases...");

    await generateTestCases();

    console.log(
      "\n🎉 Hoàn thành! Tất cả test cases đã được tạo trong thư mục testcases/"
    );
  } catch (error) {
    console.error("\n❌ Lỗi:", error);
    process.exit(1);
  }
}

main();
