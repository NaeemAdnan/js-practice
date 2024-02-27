function oddAvg(numbers) {
   const odds = [];
    for(const number of numbers){
    if(number % 2 === 0){
        odds.push(number);
    }
    
   }
   let sum = 0;
  for(const number of odds){
    sum = sum + number;
  }
  
  const count= odds.length;
//   console.log(sum, count);
  const avg = sum / count;
  return avg;
}

const numbers = [2, 4, 6, 121, 5, 6];
const avg = oddAvg(numbers);
console.log(avg);