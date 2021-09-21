/*exports.helloWorld = (req, res) => {
    res.send("boo")
}*/

/*exports.maria = (req, res) => {
    const name = req.body.name
    res.send(`Do you want a brew ${name}`)
}
*/

exports.readMaria = (req, res) => {
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

