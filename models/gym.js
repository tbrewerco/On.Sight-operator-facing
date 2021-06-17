const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema
const gymSchema = new Schema({
    name: { type: String, required: true},
}, {
    address: String
}, {
    quality_rating: {type: Number, min: 1, max: 5, default: 5}
}, {
    created_by: String // !!! UPDATE TO EMBED userSchema !!!
}, {
    routes: String // !!! UPDATE TO EMBED routeSchema !!!
}, {
    timestamps: true
});

// compile schema into mongoose model
const Gym = mongoose.model('Gym', gymSchema);

// export model
module.exports = Gym;