const ftp = require("basic-ftp");

async function uploadReactBuild() {
  const client = new ftp.Client();
  client.ftp.verbose = true; // Enable verbose mode for debugging (optional)

  try {
    await client.access({
        host: "68.178.148.238",
        user: "dragon@thehydrologist.com",
        password: "yNA6VkHx;SS+",
       
    });

    await client.ensureDir("/web-inventory"); // Create remote directory if it doesn't exist

    await client.uploadFromDir("build"); // Upload the contents of your local "build" directory

    console.log("Upload complete!");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    client.close();
  }
}

uploadReactBuild();
