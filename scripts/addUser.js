// scripts/addUser.js

const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

const addUser = async () => {
    await connectDB();

    const username = 'admin'; // Change as needed
    const password = 'admin'; // Change as needed

    const user = new User({
        username,
        password,
    });

    try {
        await user.save();
        console.log('User created');
        process.exit();
    } catch (err) {
        console.error('Error creating user:', err.message);
        process.exit(1);
    }
};

addUser();
