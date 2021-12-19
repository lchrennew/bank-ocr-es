import EntryReader from "./entry-reader.js";

export default class EntryPrinter {
    print(reader, output) {
        new EntryReader(reader).readAll().forEach(output)
    }
}
