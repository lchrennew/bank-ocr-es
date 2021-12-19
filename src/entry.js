export default class Entry {

    static middlewares = []
    #digits
    #num

    constructor(digits) {
        this.#digits = [ ...digits ]
        Entry.middlewares.forEach(middleware => middleware(this))
    }

    get number() {
        return this.#num ??= this.#digits.join('')
    }

    get digits() {
        return this.#digits
    }

    static use(middleware) {
        this.middlewares.push(middleware)
        return this
    }

    static reset() {
        this.middlewares.length = 0
        return this
    }

    setDigit(i, figure) {
        this.#digits[i] = figure
        return this
    }
}
