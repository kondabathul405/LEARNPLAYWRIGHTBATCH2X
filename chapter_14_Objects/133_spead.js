const obj1 = {a:1,b:4}
const obj2 = {c:5,d:6}

const copy ={...obj1}
console.log(copy);

let config1 = {browser : "safari",timeout :3000}
//modifying properties Allowed

config1.browser = "chrome";
config1.timeout = "5000";
config1.retries = 2;
console.log(config1);

config1 ={browser : "Mozilla"}
console.log(config1);

//print
console.log("---- ") 
