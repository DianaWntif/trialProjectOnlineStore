require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const bcrypt = require('bcrypt')



const PORT =  process.env.PORT || 3000

//sequelize.sync().then(() => console.log('db is ready'))

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)


app.use(errorHandler)



const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))


        const { User } = models
        let admins = await User.findAll({where: {access: 'Admin'}})

        if (admins.length < 1) {
            models.User.create({
                name: 'Vlad',
                dadname: 'V',
                surname: 'V',
                mail: 'mainadmin@gmail.com',
                phone: '+3752966666666',
                password: await bcrypt.hash('angryadmin', 5),
                access: 'Admin'
            }).then(() => {
                console.log('Admin added');
            })
        }

    } catch (e) {
        console.log(e)
    }
}

start()

//add admin
//let admins =


//if()

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
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
 */
//#endregion

