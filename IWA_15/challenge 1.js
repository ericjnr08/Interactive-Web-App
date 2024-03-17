// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}
// Only edit below

/**
 * Adding all the obj numbers into one array 'result'
 * making use of 'reduce' I pass directly through the array and
 * adding into two values (label and numbers)
 */
const result = data.lists.reduce((acc,[, numbers]) => {
	return acc.concat(numbers);
},[]);
console.log(result);

const extractBiggest = () => {
	const biggestNumber = []
	for(const [,number] of data.lists) {
		const biggest = number[number.length - 1]; //pull the last item
		biggestNumber.push(biggest);
		number.pop(); //removing the last item from the array
	}
	return biggestNumber;
}

// const extractBiggest = () => {
//     //const maxValues = data.lists
	
//    //remove negative symbole 
//     if (first[1] > second[1]) {
// 		return first
// 	}

// 	if (third[1] < 1) {
// 		return second
// 	}
	
// 	return third
// }

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)