//  1 firstOne
// function printLable(lbObj: { label: string }) {
//   console.log(lbObj.label);
// }
// let obj = { a: 111, label: "hello " };
// printLable(obj);

// ************
// 2 second one
// interface LabeledValue {
//   label: string;
// }

// function printLabel(labeledObj: LabeledValue) {
//   console.log(labeledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// *******************
// 3 optional properties  ?
// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({ color: "black" });

//4  readOnly property
// interface Point {
//   readonly x: number;
//   readonly y: number;
// }

// let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

// 5 readonly Array
// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

// 6 function types
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//     let result = source.search(subString);
//     return result > -1;
// }

// let mySearch: SearchFunc;
// mySearch = function(src: string, sub: string): boolean {
//     let result = src.search(sub);
//     return result > -1;
// }

// classType
// interface ClockInterface {
//   currentTime: Date;
// }

// class Clock implements ClockInterface {
//   currentTime: Date = new Date();
//   constructor(h: number, m: number) { }
// }

// extending interface

interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
