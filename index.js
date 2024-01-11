// String

const string = "String!!";

const greetings = "Hello World!";

// console.log(string.length);

// console.log(string.charAt(string.length - 1));

// console.log(string[0]);

const wordLength = 5;

// console.log(greetings.slice(6, 6+wordLength));
// console.log(greetings.slice( -(greetings.length-wordLength-1) , -1));

// console.log(string.toUpperCase());
// console.log(string.toLowerCase());

// console.log(string.replace('!', '?'));
// console.log(string.replaceAll('!', '?'));

// console.log(string);

const newString = string.replaceAll("!", "?").toString();

// console.log('New String: ', newString);

let age = 24;
let userAge = age.toString();

// console.log(typeof userAge);

let isSunny = "true";
let isRainny = false;

// console.log(isSunny && isRainny);
// console.log(isSunny || isRainny);

// if ( typeof isSunny === "boolean" ) {
//     console.log('I have Boolean Info');
// } else if (isSunny) {
//     console.log('I have info about the sunny weather.');
// } else {
//     console.log('I have no info about the sunny weather.');
// }

// switch (isSunny) {
//     case true:
//         console.log('I have Boolean Info');
//     // case "true":
//         // console.log('I have info about the sunny weather.');
//     case isSunny.length < 0:
//         console.log('Length is more than 0');
//     default:
//         break;
// }

// console.log( isSunny ? 'I have info about the sunny weather.' : 'I have no info about the sunny weather.' );

const fruits = ["Apple", "Orange", "Bananna", "Kiwi"];

fruits[0] = "Peach";

const grocery = ["eggs", "bread", ...fruits];

const [x, ...restArray] = grocery;

const array = [1, false, null, grocery, undefined, "string"];

// console.log(array);

const [first, second, ...rest] = [1, 2, 3, 4, 5];
// console.log(restArray);

let element = [];
console.log(element);

// for (let i = 0; i < fruits.length-1; i++) {
//   console.log(i);
//   element.push(fruits[i]);
//   console.log(element);
// }

fruits.forEach((el) => console.log(el));

console.log(element);
