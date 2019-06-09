const priceCheck = (products, productPrices, productSold, soldPrice) => {
    const priceMap = {};

    if (products.length !== productPrices.length) {
        throw new Error ('Products prices are not configured properly')
    }

    if ([...new Set(products)].length !== products.length) {
        throw new Error ('Incosistent pricing table')
    }

    if (productSold.length !== soldPrice.length) {
        throw new Error ('Internal error')
    }

    products.forEach((product, index) => {
        priceMap[product] = productPrices[index]
    })

    const misPrizedProducts = productSold.filter((product, index) => {
        if (priceMap[product] !== soldPrice[index]) {
            return product
        }
    });
    
    const pricingErrors = misPrizedProducts.length

    console.log(pricingErrors)
}

priceCheck(
    ['tv', 'radio', 'lighter', 'tent', 'shotgun', 'firetruck'],
    [2.00, 3.45, 4.76, 5.13, 13.09, 44.43],
    ['tv', 'tv', 'tv', 'tv', 'shotgun', 'firetruck'],
    [2.00, 2.00, 2.00, 2.00, 13.09, 44.43]
)