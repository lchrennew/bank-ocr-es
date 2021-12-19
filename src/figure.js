import { digitCompatibles, digits, getCompatibleDigits } from "./codes.js";

export default class Figure {
    code
    value
    compatibles

    constructor(code) {
        this.code = code
        const value = digits[code]
        let compatibles = digitCompatibles[value]
        this.value = value ?? ((compatibles = getCompatibleDigits(code)).length === 1 ? compatibles.pop() : '?')
        this.compatibles = [ ...compatibles ]
    }

    toString() {
        return this.value
    }
}
