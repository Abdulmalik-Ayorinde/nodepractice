const House = require('../models/House')
const errorResponseHandler = require('../utils/errorResponseHandler')
const asyncHandler = require('../middleware/asyncHandler')

// PUBLIC - GET - /api/home
exports.getHome = asyncHandler(async(req, res, next) => {
      const getHomes = await House.find() 

      res.status(200).json({
         success: true,
         count: getHomes.length,
         data: getHomes
      })
})

// PRIVATE - GET - /api/home/:id
exports.getSingleHome = asyncHandler(async (req, res, next) => {
        const getSingleHomes = await House.findById(req.params.id)  
        
        if(!getSingleHomes){
           return next(new errorResponseHandler(`Bootcamp with id ${req.params.id} is invalid`))
        }

        res.status(200).json({
            success: true,
            data: getSingleHomes
        })
})

// PRIVATE - POST - /api/home
exports.createHome = asyncHandler(async (req, res, next) => {
    const newHome = await House.create(req.body)

    res.status(200).json({
        success: true,
        data: newHome
    })

})

// private - PUT - /api/home/:id
exports.updateHome = asyncHandler(async (req, res, next) => {
    const homeUpdate = await House.findByIdAndUpdate(req.params.id, req.body)
    const getHomes = await House.find()

    res.status(200).json({
        success: true,
        data: getHomes
    })

})

// PRIVATE - DELETE - /api/home/:id
exports.deleteHome = asyncHandler(async (req, res, next) => {
    const getHomes = await House.find()  
    const homeDeleted = await House.findByIdAndDelete(req.params.id)
    
    res.status(200).json({
        success: true,
        count: getHomes.length,
        data: getHomes
    })
})