import "dotenv/config";
import { connect } from "mongoose";



async function dbConnect(): Promise<void> {
  try {
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI);
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1);
    
  }
}

export default dbConnect;
