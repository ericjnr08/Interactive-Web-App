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
 * Firstly log the data by deconstructing the code.
 * we skip the numbers and just take the word (right to left)
 */
const {
    lists: [
        [, first],
        [, second],
        [, third],
    ]
} = data

const result = []

const extractBiggest = () => {
  const firstLast = first.at(-1)
    const secondLast = second.at(-1)
    const thirdLast = third.at(-1)

    if (firstLast > secondLast && firstLast > thirdLast) {
        first.pop()
        return firstLast
    }

    if (secondLast > thirdLast) {
        second.pop()
        return secondLast
    }

    third.pop()
    return thirdLast
}

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