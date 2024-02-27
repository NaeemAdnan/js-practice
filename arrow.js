// function declearattion

// function add(a, b){
//     const result = a + b;

//     return result;
// }

// const sum = add(77,3);
// console.log(sum);


function add2(a, b){
    // const result = a + b;

    // return result;

    return a + b;
}


// function arrow
const add3 = (a,b) => a+b

// Large arrow

const add4 = (x,y,z) => {
   const sum = x + y + z;
   const multiPly = x * y * z;
   const result = multiPly - sum;

    return result;
}


const sum = add4(2,3,4);
console.log(sum);