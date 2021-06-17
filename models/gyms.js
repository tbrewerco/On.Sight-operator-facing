const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gymSchema = new Schema({
    name: String
}, {
    address: String
}, {
    quality_rating: {type: Number, min: 1, max: 5, default: 5}
}, {
    created_by: [userSchema]
}, {
    routes: [routeSchema]
});

const Gym = mongoose.model("Gym", gymSchema);

module.exports = Gym;