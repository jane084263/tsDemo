// let sym1 = Symbol();

// let sym2 = Symbol("key"); // optional string key
// *******8

// let sym2 = Symbol("key");
// let sym3 = Symbol("key");

// sym2 === sym3; // false, symbols are unique

// *******8
// const sym = Symbol();

// let obj = {
//     [sym]: "value"
// };

// console.log(obj[sym]); // "value"

// const getClassNameSymbol = Symbol();

// class C {
//     [getClassNameSymbol](){
//        return "C";
//     }
// }

// let c = new C();
// let className = c[getClassNameSymbol](); // "C"
