interface Product {
    description: string,
    price: number,
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOption{
    products: Product[];
    tax: number;
}

// function taxCalculation(options: TaxCalculationOption): [number, number] {
// function taxCalculation({products, tax}: TaxCalculationOption): [number, number] {
function taxCalculation(options: TaxCalculationOption): [number, number] {

    const {products, tax} = options;

    let total = 0;
    products.forEach(({ price }) => {
        total +=  price;
    });

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax: tax
});

console.log('Total: ', total);
console.log('Tax: ', totalTax);

export { }