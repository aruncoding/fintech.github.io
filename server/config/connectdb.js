import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
    try{
        const DB_OPTIONS = {
            dbName : "fintech"
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("DB Connected SuccessFully...");
    }catch(e){
        console.log(e)
    }
}

export default connectDb;