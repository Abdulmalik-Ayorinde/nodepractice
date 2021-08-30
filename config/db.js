const mongoose = require('mongoose')

const connectDB = async () =>{
   const dbConnection = await mongoose.connect(process.env.MONGO_URI, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }) 

   console.log(`Database connected ${mongoose.connection.host}`)
}

module.exports = connectDB