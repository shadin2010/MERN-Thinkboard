import mongoose from "mongoose"; 

export const connectDB = async()=>{

try {

    await mongoose.connect(process.env.MONGODB_URL)

console.log("MONGODB CONNECTED SUCCESSFULLY!");
    
} catch (error) {
    console.error("error connect to mongodb" , error);
    process.exit(1)
}

}