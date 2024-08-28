const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    // Get the token from the Authorization header
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Extract the token from the header
    const token = authHeader.split(' ')[1]; // Remove 'Bearer ' from the token string

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.userId; // Set user ID to request object
        next(); // Proceed to the next middleware
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = auth;
