const mongoose = require('mongoose');
const Trip = require('./models/trip.model');

(async () =>{
    //await mongoose.connect("mongodb://mongo:EE1ececB4aa15-4HDAFGd3FFcg1B3ECD@roundhouse.proxy.rlwy.net:36489");
    await mongoose.connect("mongodb://mongo:HE2A1hCEGgbAfbBcG6c4gCfFA4hAG6-3@viaduct.proxy.rlwy.net:28070");

    //await mongoose.connect("mongodb://localhost:27017/familyTrips");
    const newTrip = await Trip.create({
        name: 'prueba de viaje',
        description: 'prueba de desc',
        destination: 'Berlin',
        category: 'amigos',
        start_date: '2022-05-02'
    });

    console.log(newTrip);
})();
