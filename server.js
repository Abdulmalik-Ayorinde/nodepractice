// Import Packages
const express = require('express')
const dotenv = require('dotenv')
const  cors = require('cors')
// Import Routes
const Home = require('./routes/home')

//import errorhandler
const errorResonse = require('./middleware/errorResponse')

dotenv.config({path: './config/config.env'})

// DB connection
const connectDB = require('./config/db')
connectDB()


const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/home', Home)

app.use(errorResonse)

const PORT = process.env.PORT
const server = app.listen(PORT, ()=> console.log(`Server started on ${PORT}`))

// Close erver on unhandledRejection error
process.on('unhandledRejection', (error) => {
    console.log(`Error: ${error.message}`)
    server.close(process.exit(1))
})