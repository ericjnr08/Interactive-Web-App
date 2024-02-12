const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;
const balance = null; 

// Only change below this line

if (hourOfDay == 0 && minuteOfDay == 0){
    const taxAsDecimal = parseInt(tax) / 100;
    const startingAfterTax = salary * (1- taxAsDecimal)
    balance = startingAfterTax - food - rent - transport
} else (minuteOfDay !== undefined);{
    console.log(undefined)
}
console.log('R' + balance.toFixed(2));