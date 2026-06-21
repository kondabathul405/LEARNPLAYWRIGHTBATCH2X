const user = {
    name : "mani",
    age : 30,
    email : "john@example.com"

};
console.log(user);
console.log(user["age"]);
console.log(user.name);


//Dyanamic property access
const key = "age";
console.log(user[key]);

user.city  ="hyd";
user.age = 34;
console.log(user);

let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));