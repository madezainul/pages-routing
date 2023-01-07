const route = require('express').Router()

route.get('/', (req, res) => {
    res.json({
        message: "Home Page"
    })
})

const lecturerRoutes = require('./lecturer')
const studentRoutes = require('./student')
route.use('/lecturers', lecturerRoutes)
route.use('/students', studentRoutes)

module.exports = route