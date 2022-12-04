const ApiError = require('../error/ApiError')

class UserController {

    async signUp(req, res) {

    }

    async signIn(req, res) {

    }

    async isAuth(req, res, next) {
        const {id} = req.query
        if(!id){
            return next(ApiError.badRequest('Not founded attribute "id"'))
        }
        res.json(id)
        //res.json({message: 'isAuth'})
    }

}

module.exports = new UserController();