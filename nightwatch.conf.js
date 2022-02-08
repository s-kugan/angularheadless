require("dotenv").config();
const path = require("path");
const seleniumServer = require("selenium-server");
const chromeDriver = require("chromedriver");
const chromeSettings = require("./browser_settings/chromeSettings");

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: "./tests",
  output_folder: "./reports",
  page_objects_path: "./pages",
  //persist_globals:true,
  custom_commands_path: ["./commands"],
  custom_assertions_path: ["./custom-assertions"],
  globals_path: "./globals/globals.js",
  skip_testcases_on_fail: false,
  disable_colors: false,
  // test_workers : false,
  selenium: {
    start_process: true,
    start_session: false,
    server_path: seleniumServer.path,
    check_process_delay: 5000,
    log_path: "/logs",
    //host: "127.0.0.1",
    port: 4444,
    cli_args: {
      "webdriver.chrome.driver": chromeDriver.path,
    },
  },
  webdriver: {
    start_process: false,
  },
  screenshots: {
    enabled: true,
    on_failure: true,
    on_error: true,
    path: "./screenshots/",
  },
  test_settings: {
    testenv: {
      launchUrl: "https://www.delta.com/",
      skip_testcases_on_fail: false,
      globals: {
        language: "English",
      },
      desiredCapabilities: chromeSettings,
    },
  },
};
