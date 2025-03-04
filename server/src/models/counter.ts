import mongoose, { Document, Model, Schema } from 'mongoose';

interface ICounter extends Document {
    seq: number
};

const CounterSchema = new Schema<ICounter>({
    seq: {
        type: Number,
        default: 1_000_000_000
    }
});

const CounterModel: Model<ICounter> = mongoose.model<ICounter>("CounterModel", CounterSchema);
export default CounterModel;