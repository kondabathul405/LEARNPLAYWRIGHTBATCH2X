let config = {};

config.browser="chrome";
config.timeout = 3000;
config.testname = "login-test";

console.log(config);

delete config.browser;
console.log(config);

if(config.browser === "chrome"){
    console.log("i will execute my first TC's");
}

let config2 ={
    browser="chrome",
timeout = 3000,
testname = "login-test"

};