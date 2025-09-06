
function classDecorator<T extends {new (... args: any[]): {}}>(
    constructor: T
)
{
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass {
    public myProperties: string = 'Abc123';

    print (){
        console.log('HOLA MUNDO');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);