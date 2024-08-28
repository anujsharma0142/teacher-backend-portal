const Student = require('../models/Student');

// Add a new student or return error if student already exists
exports.addStudent = async (req, res) => {
    const { name, subject, marks } = req.body;

    try {
        let student = await Student.findOne({ name, subject });

        if (student) {
            student.marks += marks;

            await student.save();
            return res.json({ message: 'Student marks updated', student });
        }
        // Find the current maximum studentId and increment it
        const lastStudent = await Student.findOne().sort({ studentId: -1 });
        const studentId = lastStudent ? lastStudent.studentId + 1 : 1;

        student = new Student({
            studentId,
            name,
            subject,
            marks,
        });

        await student.save();
        res.json({ message: 'Student added', student });
    } catch (err) {
        console.error('Error adding student:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get a list of students with pagination
exports.getStudents = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    try {
        const students = await Student.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await Student.countDocuments();

        res.json({
            students,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        console.error('Error getting students:', err);
        res.status(500).json({ message: 'Server error' });
    }
};


// Get student by studentId
exports.getStudentById = async (req, res) => {
    const { id } = req.params;

    try {
        // Find the student by studentId (which is a number, not the default MongoDB ObjectId)
        const student = await Student.findOne({ studentId: id });

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json({ student });
    } catch (err) {
        console.error('Error getting student:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update student by studentId
exports.updateStudent = async (req, res) => {
    const { id } = req.params; // Assuming `id` is actually `studentId`
    const { name, subject, marks } = req.body;

    try {
        // Find the student by studentId and update it
        const student = await Student.findOneAndUpdate(
            { studentId: id }, // Search by studentId
            { name, subject, marks },
            { new: true }
        );

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json({ message: 'Student updated successfully', student });
    } catch (err) {
        console.error('Error updating student:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete student by studentId
exports.deleteStudent = async (req, res) => {
    const { id } = req.params; // Assuming `id` is actually `studentId`

    try {
        // Find the student by studentId and delete it
        const result = await Student.findOneAndDelete({ studentId: id });

        if (!result) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json({ message: 'Student deleted successfully' });
    } catch (err) {
        console.error('Error deleting student:', err);
        res.status(500).json({ message: 'Server error' });
    }
};
