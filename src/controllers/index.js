const {Film} = require("../models")
console.log(Film, "controllersindexhit")

exports.addFilm = async (req, res) => {
    try {
        //console.log(user)
        const film = new Film(req.body)
        await film.save()
        res.status(200).send({film: film, message: "added film"})
    } catch (error) {
        res.status(500).send({err: error})
    }
}

exports.findFilm = async (req, res) => {
    try{
        const list = await Film.find({})
        res.status(200).send({allFilms: list})
    } catch (error) {
    res.status(500).send({err: `${error}`})
    }
}

exports.findOneFilm = async (req, res) => {
    try {
        const oneFilm = await Film.find({"name": req.params.name})
        console.log(oneFilm)
        res.status(200).send(oneFilm[0].name)
    } catch (error) {
        res.status(500).send({msg: `internal server error:${error}`})
    }
}


exports.updateFilm = async (req, res) => {
    try {
        await Film.updateOne({name: req.body.name}), {$set: {name: updateOne.name}}
        console.log(updateFilm)
        res.status(200).send(updateFilm.name)
    } catch (error) {
        res.status(500).send({err: error})
    }
}


exports.deleteFilm = async (req, res) => {
    try{
        await Film.deleteOne({name: req.deleteFilm})
        res.status(200).send({film: film, message: "film deleted"})
    } catch (error) {
        res.status(500).send({err: error})
    }
}



/*exports.updateFilm = async (req, res) => {
    await Film.updateOne({name: update.req})
}



exports.deleteFilm = async (req, res) => {
    try{

    } catch (error) {

    }
}*/


/*exports.addUser = async (req, res) => {
    try{
        const user = new User(req.body)
        await user.save()
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}
*/

/*exports.helloWorld = (req, res) => {
    res.send("boo")
}*/

/*exports.maria = (req, res) => {
    const name = req.body.name
    res.send(`Do you want a brew ${name}`)
}
*/

/*exports.readMaria = (req, res) => {
    res.send({message: "get request was a hit"})
}

exports.addMaria = (req, res) => {
    const name = req.body.name
    res.send({ message: `My name is ${name}`})
}

exports.updateMaria = (req, res) => {
    const update = req.body.name + "506080"
    res.send({message: update})
}

exports.deleteMaria = (req, res) => {
    res.send({message: "delete request done"})
}

*/