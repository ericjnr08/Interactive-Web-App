const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const leo = `${leoName} ${leoSurname}, 'Owed' 'R' ${leoBalance}`;
const sarah = `${sarahName.trim()} ${sarahSurname}, 'Owed' 'R' ${sarahBalance}`;

const leoOwed = parseFloat(leoBalance * -1)
const sarahOwed = parseFloat(sarahBalance * -1)

const total = "Total amount owed: "
const userTotal = leoOwed + sarahOwed

const thousand = parseInt(userTotal / 1000) //13
const hundred = userTotal % 1000 // 976.2

if (leoName, leoSurname){
    console.log(`${leoName} ${leoSurname} (Owed: R -9394)`)
}

if (sarahName, sarahSurname){
    console.log(`${sarahName.trim()} ${sarahSurname} (Owed: R -4582.2)`)
}

console.log(divider);
console.log("\n");
console.log(total, thousand, hundred.toFixed(1));
console.log(divider);

//const thousand: parseInt()
//const hundred = 
//.trim :removes white space from variable