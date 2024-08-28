const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const studentSchema = new mongoose.Schema({
    studentId: { type: Number, unique: true },
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    }
});

studentSchema.plugin(autoIncrement, { inc_field: 'studentId' });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
