export default class FileReader {
    #cursor = 0
    #lines

    constructor(file) {
        this.#lines = file.trimEnd().split('\n')
    }

    get hasNext() {
        return this.#lines.length > this.#cursor
    }

    #readLine() {
        return this.#lines[this.#cursor++]
    }

    readLines(count) {
        return [ ...new Array(count) ].map(this.#readLine, this)
    }
}
