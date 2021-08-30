//Object property shorthand

const name = "John";
const userAge = 28;

const user = {
    name,
    age: userAge,
    location: 'Philly'
}

console.log(user);

// Object destructuring
 const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// //5 is the default for rating
// const {label: productLabel, stock, rating = 5} = product;

// console.log(label);
// console.log(stock);

const transaction = (type, {label, stock}) =>{
    console.log(type, label, stock);

}

transaction('order', product);