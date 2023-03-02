const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        console.log('66666666666666666666666666')
        const token = req.header('Authorization').replace('Bearer ', '')
        console.log('66666666666666666666666666')
        const decoded = jwt.verify(token, 'thisismynewcourse')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        console.log('7777777777777777')
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth