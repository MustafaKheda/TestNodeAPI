import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://mustafa:cL6FdoGp1ErfvnWR@cluster0.oztkdpm.mongodb.net/Login_API`
    );
    console.log("\n MongoDB Connected: ", connectionInstance.connection.host);
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
};
export default connectDB;
