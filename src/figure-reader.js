import { digits, getCompatibleDigits } from "./codes.js";
import Figure from "./figure.js";

export default class FigureReader {
    lines

    constructor(lines) {
        this.lines = lines
    }

    get #hasNext() {
        return this.lines?.[0]?.[2]
    }

    /**
     *
     * @return {Figure}
     */
    read() {
        const code = [ ...new Array(3) ].map(() => this.lines.map(line => line.shift())).join()
        let digit = digits[code]
        if (!digit) {
            return new Figure(code, ...getCompatibleDigits(code))
        }
        return new Figure(code, digit)
    }

    /**
     *
     * @return {Figure[]}
     */
    readAll() {
        const figures = []
        while (this.#hasNext) figures.push(this.read())
        return figures
    }
}
