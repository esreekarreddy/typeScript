//create empty array
const ages: number[] = []

//create a 2-dimensional array
const gameBoard: string[][] = []

//create a type Product
type Product = {
    "name": string,
    price: number
}

//create a function to get total of prices
function getTotal(products: Product[]): number{
    let sum = 0;
    for(let product of products)
        sum = sum + product.price
    return sum
}

console.log(getTotal([{"name": "Coffee", price: 15.50}, {"name": "Tea", price: 20}]))