// const { default: mongoose } = require("mongoose");
// const moongoose=require("mongoose");
// moongoose.set("strictQuery", false);
// const connectDB=async()=>{
//     try{
//         const conn =await mongoose.connect(process.env.MONGO_URI,{
//             useNewUrlParser:true,
//             useUnifiedTopology:true,
            
//         });
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch(error){
//       console.log(`Error:${error.message}`);
//       process.exit();
//     }
// };
// module.exports=connectDB;
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDB;
