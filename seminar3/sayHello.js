// const sayHello = (name) => {
//     console.log(`
//         Hello,
//         ${name}`
//     )
// }

// sayHello('andrei')

const fib = (index) => {
    switch (index) {
        case 0: return 1; break;
        case 1: return 1; break;
        default: return fib(index - 1) + fib(index - 2)
    }
}

console.log(fib(3))
console.log(fib(5))
console.log(fib(8))