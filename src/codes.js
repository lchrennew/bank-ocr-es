/***
 *
 * @param vector {[[]]}
 */
export const pivot = vector => vector.map((dim, row) => dim.map((value, col) => vector[col][row]))

export const matrix = [
    [ [ ' ', '|', '|' ], [ '_', ' ', '_' ], [ ' ', '|', '|' ] ], // 0
    [ [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ], [ ' ', '|', '|' ] ], // 1
    [ [ ' ', ' ', '|' ], [ '_', '_', '_' ], [ ' ', '|', ' ' ] ], // 2
    [ [ ' ', ' ', ' ' ], [ '_', '_', '_' ], [ ' ', '|', '|' ] ], // 3
    [ [ ' ', '|', ' ' ], [ ' ', '_', ' ' ], [ ' ', '|', '|' ] ], // 4
    [ [ ' ', '|', ' ' ], [ '_', '_', '_' ], [ ' ', ' ', '|' ] ], // 5
    [ [ ' ', '|', '|' ], [ '_', '_', '_' ], [ ' ', ' ', '|' ] ], // 6
    [ [ ' ', ' ', ' ' ], [ '_', ' ', ' ' ], [ ' ', '|', '|' ] ], // 7
    [ [ ' ', '|', '|' ], [ '_', '_', '_' ], [ ' ', '|', '|' ] ], // 8
    [ [ ' ', '|', ' ' ], [ '_', '_', '_' ], [ ' ', '|', '|' ] ], // 9
];

const codes = matrix.map(code => code.join())

export const digits = Object.fromEntries(matrix.map((code, i) => [ code.join(), i ]))

const isCompatible = (code, candidate) => {
    let failures = 0
    for (let i = 0; i < code.length; i++) {
        if (code[i] !== candidate[i]) {
            if (code[i] !== ' ' && candidate[i] !== ' ') return false
            failures++
        }
        if (failures > 1) return false
    }
    return !!failures
}

export const getCompatibleDigits =
    code => codes
        .filter(candidate => isCompatible(code, candidate))
        .map(compatible => digits[compatible])

export const digitCompatibles = codes.map(code => getCompatibleDigits(code))
