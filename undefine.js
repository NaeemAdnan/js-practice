/*
* 8 ways to get undefine.
*/

// 1. variable that is not initialized will give undefined
 let first;

// console.log(first)

// 2. Function with no returns

function second(a,b){
    const total = a + b;
}

const result = second()

// console.log(result);


// 3. parameter that is not passed will be undefined

function third(a,b,c,d){
    const total = a + b + c + d;
    console.log(a,b,c,d)
}

const sum = third(2,3)
