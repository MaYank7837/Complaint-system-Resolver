const mongoose = require('mongoose')
const dbconnect = require('../db')

//Call the db to connect the mongo db
dbconnect()

// Complaint Schema
const ComplaintMappingSchema = mongoose.Schema({
    complaintID: {
        type: String,
        required: true
    },
    technicianName: {
        type: String,
        required: true
    }
});

const ComplaintMapping = module.exports = mongoose.model('ComplaintMapping', ComplaintMappingSchema);

module.exports.registerMapping = function (newComplaintMapping, callback) {
    newComplaintMapping.save(callback);
}
module.exports.getUserByUsername = async function (username, callback) {
    const query = { technicianName: username }
    let data = await ComplaintMapping.find(query, callback);
    return data;

}
