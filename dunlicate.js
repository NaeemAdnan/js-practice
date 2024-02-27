const Name = ['Naeem', 'Fahim', 'Nahin', 'Mahim', 'Niyum', 'Fahim', 'Mahim', 'Nahin']
const number = [11,21,55,66,21,]

function noDublicate(array){
    console.log(array);
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique;
}

const uniqueArray = noDublicate(Name);
console.log(uniqueArray);