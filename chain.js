const myObject = {
    value: 0,
    increment: function(amount) {
        this.value += amount;
        return this; // Return the object itself for chaining
    },
    multiply: function(factor) {
        this.value *= factor;
        return this; // Return the object itself for chaining
    },
    getValue: function() {
        return this.value;
    }
};

// Chaining method calls
const result = myObject.increment(5).multiply(2).getValue();
console.log(result); // Output: 10
