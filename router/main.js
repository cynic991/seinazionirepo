exports.findAll = function(req, res) {
    res.send([{casa: "Galles", ospite: "Inghilterra"}, {casa: "Italia", ospite: "Irlanda"}]);
};
 
exports.findById = function(req, res) {
    res.send({id:req.params.id, casa: "l'oste", ospite: "l'ospite"});
};