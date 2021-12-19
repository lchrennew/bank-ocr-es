export default o => {
    Object.defineProperty(o, 'toStrings', {
        value: [ () => o.number ],
        writable: true,
    })

    o.addToString = f => {
        o.toStrings.unshift(f)
    }

    o.toString = function () {
        for (const toString of o.toStrings) {
            const value = toString()
            if (value) return value
        }
    }
}
