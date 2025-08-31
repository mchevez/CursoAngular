import type { Product } from './06-function-destructuring';
import  { taxCalculation } from './06-function-destructuring';


const shoppingCart: Product[] = [
    {
        description: 'nokia',
        price: 100,
    },
    {
        description: 'Ipad',
        price: 150,
    },
]

//tax = 0.15%

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total: ', total);
console.log('Impuesto: ', tax);
