const product = [
    {id: 1 , name: 'lenovo', price: 65000},
    {id: 2 , name: 'Dell', price: 55000},
    {id: 3 , name: 'HP', price: 45000}, 
    {id: 4 , name: 'MAC', price: 145000}, 
]

/*
*Map object er moddhe jeye upadan khuje ber kore
*/


// map product name
const names = product.map(product => product.name);
// map product price.
const prices = product.map(product => product.price);
const prices2 = product.map(product => product.price + 100);

// console.log(names);
// console.log(...names);
// console.log(...names + names);



// console.log(prices);
// console.log(prices2);
// console.log(...prices);
// console.log(...prices + prices);


// For Each
// product.forEach(p => console.log(p.id))

// Filter
const expensive = product.filter(p => p.price > 65000)
const expensive2 = product.filter(p => p.price < 65000)
// console.log(expensive)
// console.log(expensive2)


// Reduce
const total = product.reduce( (acum, current) => acum + current.price, 0)
// console.log(total)