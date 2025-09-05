

export function whatsMyType<T>(argument: T): T {

    return argument;
}

let amIString = whatsMyType<string>('HOLA MUNDO');
let amINumber = whatsMyType<number>(100.456);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(' '))
console.log(amINumber.toFixed(2))
console.log(amIArray.join('-'))