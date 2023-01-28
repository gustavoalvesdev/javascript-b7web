const sumSquare = (a, b) => {
    const square = x => x * x

    return square(a) + square(b)
}

console.log(sumSquare(5, 5));