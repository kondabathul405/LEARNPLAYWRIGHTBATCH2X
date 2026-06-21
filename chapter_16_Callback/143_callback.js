function print() {
    console.log("Normal Function is called");
}

function placeOrder(ClipboardItem, pramodCallback) {
    console.log("Hi, You order is placed");
    pramodCallback();
}

// First Way
placeOrder("Pizza", print);

//second way anoy
placeOrder("burger",function(){
    console.log("Anoy Fn, I am also a function wihtout name!")
});
//third function
placeOrder("Mom's",()=>{
 console.log("Anoy Fn, I am also a function wihtout name!")
});
