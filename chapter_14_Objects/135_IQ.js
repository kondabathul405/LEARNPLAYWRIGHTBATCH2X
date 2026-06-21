const obj = {a:1,b:2,c:4}

console.log(Objects.keys(obj));
console.log(Objects.values(obj));
console.log(Objects.entries(obj));

const user ={name : "pramod",age : 34};

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}