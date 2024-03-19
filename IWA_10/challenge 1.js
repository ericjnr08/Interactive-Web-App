const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

// const futureId = 9 error
if (futureId === 9) {
    console.log(`ID ${futureId} not created yet`)
};

//charismas update (time and date)
const newXman = {
    name: 'X-mas',
    date: new Date(`christmas.date`),
};

newXman.date.setHours(0);
newXman.date.setMinutes(0);
newXman.date.setSeconds(0);
newXman.date.getMilliseconds(0);

//checking earlier date to new date added for christmas
const isEarlier = newXman.date < new Date();
console.log('New date is earlier:', isEarlier);

if (isEarlier) {
    const copied = { id: 6, name: 'Christmas Day', date: new Date(`25 December ${currentYear} 13:25`) };
    copied.name = newXman.name;
    copied.date = newXman.date;

//if there are changes, below gets logged
    console.log('ID change:', holidays[christmas].id !== copied.id);
    console.log('Name change:', holidays[christmas].name !== copied.name);
    console.log('Date change:', holidays[christmas].date.getTime() !== copied.date.getTime());

}

const correctDate = new Date();
correctDate.setHours(0);
correctDate.setMinutes(0);


holidays[christmas] = copied;

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
);

const firstHoliday = new Date(holidays[0].date);
const lastHoliday = new Date(holidays[8].date);

/**
 * const firstHoliday = new Date (firstHolidayTimestamp).getDate();
 * const lastHoliday = new Date (firstHolidayTimestamp).getMonth() + 1; //added one because getMonth returns to 0
 * console.log(firstHoliday);
 * console.log(lastHoliday);
 * */
console.log(`${firstHoliday.getDate()}, ${firstHoliday.getMonth() + 1}, ${currentYear}`);
console.log(`${lastHoliday.getDate()}, ${lastHoliday.getMonth() + 1}, ${currentYear}`);

// const currentDate = new Date();
// const currentDay = currentDate.getDate();
// const currentMonth = currentDate.getMonth() + 1;

// console.log(`${firstDay}/{firstMonth}/{currentYear}`)
// console.log(`{lastDay}/{lastMonth}/{currentYear}`)

const randomHolidays = holidays[Math.floor(Math.random() * holidays.length)]
console.log(`${randomHolidays}.date`);

//date update to read DD/MM/YYYY

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}, ${month}, ${year}`;
}