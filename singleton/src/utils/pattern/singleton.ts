let counter = 0
let instance: Counter

class Counter {
    constructor() {
        if (instance) throw Error("Instance already defined")
        instance = this
    }

    getInstance() {
        return this
    }

    increment() {
        return ++counter
    }

    decrement() {
        return --counter
    }

    getCount() {
        return counter
    }
}

const singletonCounter = Object.freeze(new Counter())

export default singletonCounter
