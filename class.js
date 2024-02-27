const product = [
    {id: 1 , name: 'lenovo', price: 65000},
    {id: 2 , name: 'Dell', price: 55000},
    {id: 3 , name: 'HP', price: 45000}, 
    {id: 4 , name: 'MAC', price: 145000}, 
]

// has some property and methods

class Product{
    country = 'Bangladesh';
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo = new Product()
// console.log(lenovo)
// lenovo.speak('oba kita kou')


/*
* New classs
*/

class teacher{

    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir mela poran apni')
    }
}

const naeem = new teacher('Naeem sir', 'Physics')
console.log(naeem)