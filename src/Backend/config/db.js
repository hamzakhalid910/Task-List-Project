import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://hamzakhalid96804:7QIajH82JVmVOhiy@taskmanager.ivz3dqv.mongodb.net/?retryWrites=true&w=majority&appName=TaskManager`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;