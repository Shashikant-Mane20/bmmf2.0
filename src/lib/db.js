import mongoose from "mongoose";

<<<<<<< HEAD
const MONGODB_URI = process.env.MONGODB_URI;


=======
// const MONGODB_URI = process.env.MONGODB_URI;
>>>>>>> 04be21579afe1bb2b2e58f8f0d778ecf580ee4e3

// const MONGODB_URI= 'mongodb+srv://shashikantmane:a6cdkkrGXu4b5w2H@cluster0.2gwma.mongodb.net/';
const MONGODB_URI= 'mongodb+srv://shashikantmane:a6cdkkrGXu4b5w2H@cluster0.2gwma.mongodb.net/';

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
