import mongoose, { Mongoose } from 'mongoose';

declare global {
    var mongoose: {
      conn: Mongoose | null;
      promise: Promise<Mongoose> | null;
    };
  }
  

const MONGO_URI: string | undefined = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable in .env.local');
}

interface Cached {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Use a global variable to maintain a cached connection across hot reloads in development.
let cached: Cached = global.mongoose as Cached;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<Mongoose> {
  console.log("Connecting to MongoDB...");
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URI as string, opts).then((mongooseInstance) => mongooseInstance);
  }

  cached.conn = await cached.promise;
  console.log("Connected to MongoDB", cached.conn);
  return cached.conn;

}

export default dbConnect;
