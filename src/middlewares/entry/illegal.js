export default o => {
    Object.defineProperty(o, 'illegal', {
        get() {
            return o.number.includes('?') || o.checksum !== 0
        }
    })
    o.addToString(function () {
        if (o.illegal) return `${o.number} ILL`
    })

}
