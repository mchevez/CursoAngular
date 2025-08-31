
export class Person{

    public name?: string;
    private address?: string;

    constructor(){
        this.name = 'Michael';
        this.address = 'Managua, Ciudad Sandino'
    }
}

const Michael = new Person();

console.log(Michael.name);
// console.log(Michael.address);

