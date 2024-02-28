// Basic Arguments

function sum(a, b, c){
    console.log(arguments)
    const result = a + b + c;
    return result;
}

// Arguments--------↓
const total = sum(5, 8, 9, 12, 4, 5); 
console.log(total);