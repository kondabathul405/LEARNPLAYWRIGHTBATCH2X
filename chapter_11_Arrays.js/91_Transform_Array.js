let scores = [43,46,38,45,90];

let grades = scores.map(s=>s>38 ? "pass":"Fail");
console.log(grades);

let passing = scores.filter(s=>s>70);
console.log(passing);

let total = scores.reduce((a,b)=>a+b,0);
console.log(total);