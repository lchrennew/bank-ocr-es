import FigureReader from "./figure-reader.js";
import Entry from "./entry.js";

export default class EntryReader {
    #reader

    /**
     *
     * @param reader {FileReader}
     */
    constructor(reader) {
        this.#reader = reader
    }

    get hasNext() {
        return this.#reader.hasNext
    }

    /**
     * @return {Entry}
     */
    #read() {
        const [ [ ...line1 ], [ ...line2 ], [ ...line3 ] ] = this.#reader.readLines(4)
        const figureReader = new FigureReader([ line1, line2, line3 ])
        return new Entry(figureReader.readAll())
    }

    /**
     *
     * @return {Entry[]}
     */
    readAll() {
        const entries = []
        while (this.hasNext) entries.push(this.#read())
        return entries
    }
}
