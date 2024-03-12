// script.js

function add(a, b) { 
   return a + b; // added return value
}

function multiply(a, b) { 
    return a * b; // Added the correct multiply syntax
}

 function internal (a, b) {
 	const added = add(a, b);
 	const multiplied = multiply(a, b);
 	return {added, multiplied};
 }

//coaching update
function internal () {
	const added = this.add(this.internal.a, this.internal.b);
	const multiplied = this.multiply(added, this.internal.c);
    console.log(multiplied)
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()