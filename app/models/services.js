/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Service Schema
 */
var ServiceSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    serviceType: {  // 'resort' or 'activity'
        type: String,
        default: 'resort',
        trim: true
    },
    address: {
        type: Schema.ObjectId,
        ref: 'Client.address'
    },
    thumbnailUrl: {
        type: String,
        default: 'http://placehold.it/300x200'
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    client: {
        type: Schema.ObjectId,
        ref: 'Client'
    },
    availability: {
        type: Array,
        default: [  // array of objects with 'startDate' and 'endDate' Dates
            { 'startDate': new Date(2013, 11, 01),
              'endDate': new Date(2015, 11, 01)
            }
        ]
    }
});

/**
 * Validations
 */
ServiceSchema.path('title').validate(function(title) {
    return title.length;
}, 'Title cannot be blank');

ServiceSchema.path('serviceType').validate(function(serviceType) {
    return serviceType === 'resort' || serviceType === 'activity' || serviceType === '';
}, 'Title cannot be blank');

/**
 * Statics
 */
ServiceSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('client', 'name address').exec(cb);
    }
};

mongoose.model('Service', ServiceSchema);