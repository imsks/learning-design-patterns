// let counter = 0
// let instance

// class Counter {
//     constructor() {
//         if (instance) throw Error("Instance already defined")
//         instance = this
//     }

//     getInstance() {
//         return this
//     }

//     increment() {
//         return ++counter
//     }

//     decrement() {
//         return --counter
//     }

//     getCount() {
//         return counter
//     }
// }

// const singletonCounter = Object.freeze(new Counter())

let count = 0

const counter = {
    increment() {
        return ++count
    },

    decrement() {
        return --count
    },

    getCount() {
        return count
    }
}

Object.freeze(counter)

export default { counter }