const {Router} = require ("express")
const helloRouter = Router()
const { 
    findFilm,
    addFilm,
    findOneFilm,
    updateFilm,
    deleteFilm,
 //   addUser
} = require ("../controllers")
//const { testMiddle } = require("../middleware")


helloRouter.get("/maria", findFilm)
helloRouter.post("/maria", addFilm)
helloRouter.put("/maria", updateFilm)
//helloRouter.patch("/maria", updateMaria)
helloRouter.delete("/maria", deleteFilm)
//helloRouter.post("/user", addUser)
helloRouter.get("/maria/:name", findOneFilm)

module.exports = helloRouter
