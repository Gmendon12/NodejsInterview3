function defaultExport(req,res){
    res.send("default exports")
}

function namedExport(req,res){
    res.send("Named Module")
}

exports.defaultExport(); // default export

module.exports = {
    nameexport : namedExport()
} // named export

