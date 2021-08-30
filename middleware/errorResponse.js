const errorResponseHandler = require("../utils/errorResponseHandler");

const errorResponse = (err, req, res, next) => {

    let error = {...err}
    error.message = err.message
    
    console.log(err.keyValue)
    // console.log(err.errors.message.properties.path)

    //Monogo Error
    if(err.code === 11000) {
        const message = `${err.keyValue.name} already Exists`
        error = new errorResponseHandler(message, 400)
    }

    if(err.name === 'CastError') {  
        const message = `Resources with id ${err.value} is invalid`
        error = new errorResponseHandler(message, 404)
    }

    if(err.name === 'ValidationError') {
            const message = `Feild cannot be empty`
            error = new errorResponseHandler(message, 400)
    } 

    res.status(error.statusCode|| 500).json({
        success: false,
        data: error.message || 'Server Down'
    }) 
}

module.exports = errorResponse