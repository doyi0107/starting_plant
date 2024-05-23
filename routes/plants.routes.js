module.exports = app =>{
    const plant = require("../controllers/plants.controller.js");
    


    app.get("/plant/info/:plants_id", plant.getPlant);
    app.get("/plant/info", plant.allPlant);
};


