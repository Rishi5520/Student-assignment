import mongoose from "mongoose";

const mongoURL = 'mongodb://localhost:27017/StudentAssignAPP?directConnection=true'
export default async function connectDB(){
    try {
        const connect = mongoose.connect(mongoURL);
        console.log('DB connection established' + (await connect).Connection.host);;

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}