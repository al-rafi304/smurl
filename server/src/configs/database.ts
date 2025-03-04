import mongoose from 'mongoose';
import CounterModel from '../models/counter';

const connectDB = async () => {
  try {

    const mongoUri = process.env.MONGO_URI
    if (!mongoUri) {
        throw new Error('MONGO_URI is not defined');
    }
    await mongoose.connect(mongoUri);
    console.log("Connected to database");

  } catch (err : any) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);  // Gracefully exit
  }
};

export const initCounter = async () => {
    try {
        const counter = await CounterModel.findOne();
        if (!counter) {
            await new CounterModel().save();
            console.log("✅ Counter initialized")
        } else {
            console.log("✅ Counter already exists")
        }
    } catch (err: any) {
        console.log("❌ Error initializing counter")
    }
}

export default connectDB;