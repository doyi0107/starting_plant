const Plant = require("../models/plants.model.js");


exports.getPlant = (req, res) => {
    Plant.info(req.params.id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        else {
            console.log("1")
            res.send(data);
        }
    });
};
