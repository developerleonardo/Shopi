/**
 * This function calculates the total price of a new order
 * @param {Array} products cartProducts: Array of objects 
 * @returns {Number} totalPrice 
 */ 
const totalPrice = (products) => {
    const productsToSum = products.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    return productsToSum;
}

export { totalPrice };