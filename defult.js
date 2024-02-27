function add(num1, num2){
    const result = num1 + num2;
    // console.log(num1, num2, result);

    return result;
}

// const sum = add(2,7)
// const sum = add(5)
// const sum = add()

// Default Parameter
function add2(num1 = 3, num2 = 5){
    const result = num1 + num2;
    console.log(num1, num2, result);

    return result;
}

const sum = add2();
// const sum = add2(44,5);