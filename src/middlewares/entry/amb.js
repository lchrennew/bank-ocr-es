import Entry from "../../entry.js";

export default o => {
    Object.defineProperty(o, 'amb', {
        get() {
            return o.digits
                .flatMap((digit, i) => digit.compatibles.map(figure => new Entry(o.digits).setDigit(i, figure)))
                .filter(entry => !entry.illegal)
                .map(entry => entry.number)
        }
    })

    o.addToString(function () {
        if (o.illegal) {
            const amb = o.amb
            if (amb.length > 1) return [ o.number, 'AMB', amb ].join(' ')
            if (amb.length === 1) return amb[0]
        }
    })
}
