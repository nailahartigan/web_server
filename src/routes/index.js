const {Router} = require ("express")
const helloRouter = Router()
const { 
    readMaria,
    addMaria,
    updateMaria,
    deleteMaria,
} = require ("../controllers")

helloRouter.get("/maria", readMaria)
helloRouter.post("/maria", addMaria)
helloRouter.put("/maria", updateMaria)
helloRouter.patch("/maria", updateMaria)
helloRouter.delete("/maria", deleteMaria)

module.exports = helloRouter