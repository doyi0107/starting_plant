const Plant = require("../models/plants.model.js");


exports.getPlant = (req, res) => {
    Plant.info(req.params.plants_id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        else {
            res.send(data);
        }
    });
};

exports.allPlant = (req, res) => {
    Plant.allPlant(req, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        else {
            res.send(data);
        }
    });
};

exports.reco = (req, res) => {
    Plant.reco(req.query, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        else {
            res.send(data);
        }
    });

};
exports.search = (req, res) => {
    Plant.search(req.query, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        else {
            res.send(data);
        }
    });
    
};