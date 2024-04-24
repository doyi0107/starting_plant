const sql = require("./db.js");

const Plant = function (plant) {
    this.plants_id = plant.plants_id;
    this.name = plant.name;
    this.level = plant.level;
    this.type = plant.type;
    this.place = plant.place;
    this.price = plant.price;
    this.life = plant.life;
    this.height = plant.height;
    this.temperature = plant.temperature;
    this.explain = plant.explain;
};



Plant.info = (plants_id, result) => {
    sql.query('SELECT * FROM plants WHERE plants_id = ?', [plants_id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    })
}

module.exports = Plant;