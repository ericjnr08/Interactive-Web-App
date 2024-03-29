let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

//Removed extra syntax and calculated value
const logCalc = () => { 
    const isString = typeof calculated === 'numerical-string'; //Checking for a string
    const calculatedAsNumber = isString ? calculated : Number(calculated)
    calculated = calculatedAsNumber + 1 
};

//Corrected the missing parentheses ()
const calcUser = () => {
  logCalc();
  if (calculated > 2) user = 'John';
  if (calculated > 2) state = 'requesting';
  if (calculated > 3) state = 'idle';
};

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`);
	}
};

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()