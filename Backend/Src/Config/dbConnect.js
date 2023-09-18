import mongoose from "mongoose";

const mongoURL = 'mongodb+srv://rishirajshinde1610:rishirajshinde@1610@cluster0.qnerxdz.mongodb.net/?retryWrites=true&w=majority'


export default async function connectDB(){
    try {
        const connect = mongoose.connect(mongoURL);
        console.log('DB connection established' + (await connect).Connection.host);;

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}