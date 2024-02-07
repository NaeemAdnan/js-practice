// Leap year

function leapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const leap = leapYear(2023);
const leap1 = leapYear(2024);
const leap2 = leapYear(2025);
const leap3 = leapYear(2026);
console.log(leap, leap1, leap2, leap3)
// console.log(leap1)
// console.log(leap2)
// console.log(leap3)