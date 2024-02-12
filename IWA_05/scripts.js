const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

let shipping = null
let currency = '$';
let customer = 1;
const location = 'RSA'

//item prices
const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * 'NONE_SELECTED'
const batteries = 35 * 2
const pens = 5 * 'NONE_SELECTED' 
 
//calculate shipping depending on location
if (location === RSA) { 
    shipping = 400 
	 currency = 'R' 
} else if (location === NAM) {
    shipping = 600 
	currency = "$"
} else if (location === 'NK') {
	console.log(BANNED_WARNING)
} else (shipping === 800)

if (shipping = 0 && customer !== 1) {
	 console.log(FREE_WARNING) 
}

//calculate cost without shipping

const TotalCost = shoes + batteries + pens + shirts + shipping;

function calcShipping(shoes, batteries, pens, shirts, shipping) {
	return TotalCost
}

if (TotalCost >= 1000 && (location === 'RSA'|| location === 'NAM') && customer === 1) {
	shipping = 0;

}

console.log('Price:', currency + TotalCost);