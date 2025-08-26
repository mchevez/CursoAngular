

function addNumbers(a: number, b: number): number{
    return a+b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${ a + b }`;
}

function multiply (firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber*base;
}

// const result: number = addNumbers(1,2);
// const result2: string = addNumbersArrow(1,2);
// const multiplyresult: number = multiply(5);

// console.log({result, result2, multiplyresult})

interface Character {

    name: string,
    hp: number,
    showHp: () => void
}

function healCharacter(character: Character, amount: number){

    character.hp += amount
}

const strider: Character = {

    name: 'strider',
    hp: 30,
    showHp: function () {
        console.log(`Puntos de vida ${this.hp}`)
    },
}

healCharacter(strider, 10)
healCharacter(strider, 80)
healCharacter(strider, 40)

strider.showHp()
