const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        pincode: { type: String, require: true },
        age: { type: Number, require: true },

        gender: {
            type: String,
            enum: ["male", "female", "others"]

        },
    },
    {
        versionKey: false,
        timestamps: true,
    },
);

module.exports = mongoose.model("user", userSchema);
