const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema
const gymSchema = new Schema({
    name: String,
    address: String,
    quality_rating: { type: Number, min: 1, max: 5 },
    createdBy: String, // !!! UPDATE TO REFERENCE userSchema !!!
    updatedBy: String,
    routes: Array,
 }, // !!! UPDATE TO EMBED routeSchema !!!
    { timestamps: true }

);

// compile schema into mongoose model
const Gym = mongoose.model("Gym", gymSchema);

// export model
module.exports = Gym;