const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')



const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

class UserController {

    async signUp(req, res, next) {
        const {name,dadname,surname,mail,phone, password, access} = req.body
        if (!mail || !password || !validateEmail(mail)) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({mail,name,dadname,surname,phone, password:hashPassword, access:'User'})
        const basket = await Basket.create({userId: user.id})

        const token = generateJwt(user.id, user.mail, user.access)
        return res.json({token})
    }

    async signIn(req, res, next) {
        const {mail, password} = req.body
        const user = await User.findOne({where: {mail}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.mail, user.role)
        return res.json({token})
    }

    async isAuth(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

}

module.exports = new UserController();