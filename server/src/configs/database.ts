import mongoose from 'mongoose';

const connectDB = async () => {
  try {

    const mongoUri = process.env.MONGO_URI
    if (!mongoUri) {
        throw new Error('MONGO_URI is not defined');
    }
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected');

  } catch (err : any) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);  // Gracefully exit
  }
};

export default connectDB;