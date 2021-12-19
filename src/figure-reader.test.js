import { matrix, pivot } from "./codes.js";
import FigureReader from "./figure-reader.js";

test('parse 0-9', () => {
    for (let i = 0; i < 10; i++) {
        const reader = new FigureReader(pivot(matrix[i]))
        const digit = reader.read()
        expect(digit.value).toBe(i)
    }
})

test('parse ?', () => {
    const reader = new FigureReader(pivot([ [ ' ', ' ', ' ' ], [ '_', '_', '_' ], [ ' ', ' ', '|' ] ]))
    const digit = reader.read()
    expect(digit.value).toBe('?')
})
