const mongoose = require('mongoose')

const HouseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
      },
    message: {type:String, required: [true, 'Please Enter Message']},
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('House', HouseSchema)