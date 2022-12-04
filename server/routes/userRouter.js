const Router = require('express')
const router = new Router()
const userCtrler = require('../controllers/userController')

router.post('/signup', userCtrler.signUp)
router.post('/signin', userCtrler.signIn)
router.get('/auth', userCtrler.isAuth)

module.exports = router