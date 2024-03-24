const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = []

    for (let i = 0; i < length; i++) {
        result.push(i)
    }

    return result
}

//COMMAND
const createData = () => {
    const current = new Date()
    current.set(1)
/**
 * Set up the correct date formatting required as well as completed the loop index which displays
 * the week and day for different months of the calendar 
 */
    const startDay = current.getDate()
    const daysInMonth = getDaysInMonth(current)

    const weeks = createArray(5)
    const days = createArray(7)
    const result = []

    for (const weekIndex of weeks) {
        result.push({
            week: weekIndex + 1,
            days: []
        })

        for (const dayIndex of days ) {
            const day = (dayIndex - startDay) + (weekIndex * 7) +1
            const isValid = day > 0 && day <= daysInMonth

            result[weekIndex].days.push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : '',
            })
        }
    }

    return result
}

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        ${existing}
        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `

    return result
}
//FOMULA
const createHtml = (data) => {
    let result = ''

    for (const { week, days } of data ) {
        let inner = ""
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)
    
        for (const { dayOfWeek, value } of days) {
            const isToday = new Date().getDate() === value
            const isWeekend = dayOfWeek === 1 || dayOfWeek === 7
            const isAlternate = week % 2 === 0
            
		let classString = 'table__cell'

            if (isToday) classString = `${classString} table__cell_`
            if (isWeekend) classString = `${classString} table__cell_`
            if (isAlternate) classString = `${classString} table__cell_`
            inner = addCell()
        }

        result = `
            ${result}
            <tr>${inner}</tr>
        `
    }
    
    return result
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)