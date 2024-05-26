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
Plant.allPlant = (data, result) => {
    sql.query('SELECT * FROM plants ', (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    })
}
Plant.reco = (req, result) => {
    console.log(req.level)
    let price, life, height = 0;
    if(req.price=="1_won")
    {   
        price = 10000
    }
    else if(req.price=="5_won")
    {
        price = 50000
    }
    else if(req.price=="10_won")
    {
        price = 100000
    }
    else if(req.price=="20_won")
    {
        price = 200000
    }
    else
    {
        price = 99999999
    }
    if(req.life=="1_year")
    {   
        life = 1
    }
    else if(req.life=="5_year")
    {
        life = 5
    }
    else if(req.life=="10_year")
    {
        life = 10
    }
    else
    {
        life = 99999999
    }
    if(req.height=="20_cm")
    {   
        height = 20
    }
    else if(req.height=="50_cm")
    {
        height = 50
    }
    else if(req.height=="1_m")
    {
        height = 100
    }
    else if(req.height=="5_m")
    {
        height = 500
    }
    else
    {
        height = 99999999
    }
    if(req.type == "all" && req.place == "all" )
    {
        sql.query('SELECT * FROM plants WHERE level = ? and price <= ? and life <= ? and height <= ?', [req.level, price, life, height], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, res);
        })
    }
    else if(req.type == "all")
    {
        sql.query('SELECT * FROM plants WHERE level = ? and place = ? and price <= ? and life <= ? and height <= ?', [req.level, req.place,price, life, height], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, res);
        })
    }
    else if(req.place == "all")
    {
        sql.query('SELECT * FROM plants WHERE level = ? and type = ? and price <= ? and life <= ? and height <= ?', [req.level, req.type, price, life, height], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, res);
        })
    }
    else
    {
        sql.query('SELECT * FROM plants WHERE level = ? and type = ? and place = ? and price <= ? and life <= ? and height <= ?', [req.level, req.type, req.place,price, life, height], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, res);
        })
    }
    
}
module.exports = Plant;
//level type place price life height

    //Beginner Intermediate Expert
    //flower tree foliage succulents Herb
    //indoor outdoor all
    //1_won 5_won 10_won 20_won all
    //1_year 5_year 10_year all
    //20_cm 50_cm 1_m 5_m all