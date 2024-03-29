const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    phoneNumber: {
        type: Number,
        validate: {
            validator: function (v) {
                return /^([0-9]{10}$)/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
        },
    },

    name: {
        type: String,
    },

    age: {
        type: Number,
        min: 0,
        max: 100
    },

    email: {
        type: String,
        default: null,
    },

    gender: {
        type: String,
        default: "null"
    },

    ip_address: {
        type: String,
        default: "null"
    },

    location: {
        type: String,
        default: "null"
    },

    region: {
        type: String,
        default: "null"
    },

    language: {
        type: String,
        default: "null"
    },

    notificationsEnabled: {
        type: Boolean,
        default: true,
    },

    password: {
        type: String,
    },
    predictions: {
        type: Number,
        default: 0,
    },
    tempPredictions: {
        type: Number,
        default: 1,
    },
    addedPredictions: {
        type: Number,
        default: 0
    },
    editedPredictions: {
        type: Number,
        default: 0
    },
    adsViewed: {
        type: Number,
        default: 0
    },
    reset: {
        type: Boolean,
        default: false
    },
    myReferralCode: {
        type: String,
    },
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;
