const mongoose = require("mongoose");
const { Schema } = mongoose;

const EditprofileSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    img: {
        data: Buffer,
        contentType: String
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    college: {
        type: String,
    },
    phone: {
        type: Number,
    },
    github: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    password: {
        type: String,
    },
});

module.exports = mongoose.model('edituser', EditprofileSchema);
