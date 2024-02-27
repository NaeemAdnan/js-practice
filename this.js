class person{
    constructor(name, age){
         this.name = name;
        this.age = age;
    }

    slep(){
        console.log(`Sleeping  Now ${this.name}`)
    }
}
/*
const kodom = new person('kodom', 21)
console.log(kodom)
kodom.slep();
*/

const naeem = new person('Naeem', 24)
console.log(naeem)
naeem.slep();