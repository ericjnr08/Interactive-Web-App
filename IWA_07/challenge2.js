const nickname= "Timmy";
const firstname = "Timothy";

if (nickname) {
    console.log(`Good Morning, ${nickname}`)
} else if (firstname) {
    console.log(`Good Morning, ${firstname}`)
} else {
    console.log('Good Morning!')
}

// console.log(`Good Morning, ${nickname || firstname}`);
