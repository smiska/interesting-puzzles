const faker = require('faker')

const randomProduct = () => {
    return {
        name: faker.commerce.product(),
        prices: [
            parseFloat(faker.commerce.price(50, 100)),
            parseFloat(faker.commerce.price(50, 100)),
            parseFloat(faker.commerce.price(50, 100))
        ],
        inStock: faker.random.boolean()
    }
}

const getStockedProducts = (products) => {
    return products.filter(p => p.inStock === true)
}

const generateRandomProducts = (amount) => {
    let products = []
    for (let index = 0; index < amount; index++) {
        products.push(randomProduct())        
    }
    return products
}

// console.log(generateRandomProducts(10))

const productPriceAverage = (products) => {
    let totalPrice = 0
    let priceCount = 0
    products.forEach(product => {
        product.prices.forEach(price => {
            totalPrice += price
            priceCount++
        });
    });
    return totalPrice / priceCount;
}

console.log(productPriceAverage(generateRandomProducts(4)))