export default o => {
    Object.defineProperty(o, 'checksum', {
        get() {
            return o.digits.reduceRight((acc, cur, i) => acc + (9 - i) * cur, 0) % 11;
        }
    })
}
