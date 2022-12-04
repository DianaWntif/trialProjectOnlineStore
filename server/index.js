require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT =  process.env.PORT || 3000

sequelize.sync().then(() => console.log('db is ready'))

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)

app.use(errorHandler)

app.post('/', (req, res) => {
    res.status(200).json({message: "test post"})
})
app.get('/', (req, res) => {
    res.status(200).json({message: "test get"})
})

//#region POST n GET request
/*
//const User = require('models/User')
app.use(express.json())

app.post('/users', (req, res) => {
    User.create(req.body).then(() => {
        res.send('user is added')
    })
})

app.get('/users', (req, res) => {
    const users = await User.findAll()
    //res.send(users)
    console.log(users)
})

 */
//#endregion

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))