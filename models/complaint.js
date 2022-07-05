const mongoose = require('mongoose')
const dbconnect = require('../db')

//Call the db to connect the mongo db
dbconnect()

// Complaint Schema
const ComplaintSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    contact: {
        type: String
    },
    desc: {
        type: String
    }
});

const Complaint = module.exports = mongoose.model('Complaint', ComplaintSchema);

module.exports.registerComplaint = function (newComplaint, callback) {
    newComplaint.save(callback);
}
module.exports.getComplaintById = async function (id, callback) {
    const query = { _id: id }
    let data = await Complaint.find(query, callback)
    console.log("data1", data);
    const arr = { id: data[0]._id, desc: data[0].desc, name: data[0].name }
    console.log("array", arr)
    return arr;
}
module.exports.getAllComplaints = function (callback) {
    Complaint.find(callback);
}