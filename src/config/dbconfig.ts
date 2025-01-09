import mongoose from "mongoose";

export const connect = async () => {
     try {
         mongoose.connect(process.env.MONGO_DB_URI!);

         const connection = mongoose.connection;

         connection.on('connected', () => {
             console.log('Mongo db connected sucessfully')
         });

         connection.on('error', (err) => {
             console.log('MOngodb connect failed', err);
             process.exit()
         })
     } catch (error) {
         console.log('Something wen wrong');
         console.log(error)
     }
}