
/*const bcrypt = require("bcryptjs")
const { User } = require("../models")


exports.testMiddle = (req, res, next) => {
    try{
        req.user = "Naila"
        next()
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.hashPassword = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 8)
        req.body.password = hashedPassword
        next()
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.decryptPassword = async (req, res, next) => {
    try{
        const user = await User.find({email: req.body.email})
        const passwordMatch = await bcrypt.compare(req.body.password, user.password)
        if (passwordMatch) {
            next()
        } else {
            throw new Error
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
*/