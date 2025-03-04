import CounterModel from "./models/counter"

const charsetB58: string[] = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".split('')

const encodeB58 = (num: number) => {
    let rem: number;
    let encoded: string[] = [];

    while (num != 0) {
        rem = num % 58;
        num = Math.floor(num / 58);
        encoded.push(charsetB58[rem])
    }

    return encoded.reverse().join('')
}

export const generateId = async () => {
    const counter = await CounterModel.findOneAndUpdate(
        {},
        { $inc: { seq: 1 } }, // Atomic increment
        { new: true, upsert: true, returnDocument: "after" }
    );

    return encodeB58(counter.seq);
}
