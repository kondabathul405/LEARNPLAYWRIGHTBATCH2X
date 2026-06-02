let raj_age =16;
let raj_will_goa = raj_age>=18? "raj_will_goa":"Not goa";
console.log(raj_will_goa);

let actualstatuscode = 200;
let expectedstatuscode = 200;
let statuscode = actualstatuscode ===expectedstatuscode;
console.log(statuscode); 

let age_pramod = 45;
let is_pramod_d =age_pramod>18 ?(age_pramod>26 ? "Drink": "NoDrink"): "No Goa";
console.log(is_pramod_d)

let temp = 35;
let feel = (temp>=40)? "Very Hot":
            (temp>=30)?"hot":
            (temp>=20)?"warm":
            (temp>=10)?"cool":"cold";
            console.log("7.Temparature:",temp,"|Feel:",feel);