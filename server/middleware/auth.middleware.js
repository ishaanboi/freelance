const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
    const token = req.header('x-auth-token');
    console.log("Incoming token:", token); // 👈 Add this
    if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        console.log("Decoded user:", req.user); // 👈 Add this
        next();
    } catch (err) {
        console.error("JWT verification failed:", err.message); // 👈 Add this
        res.status(401).json({ msg: "Token is not valid" });
    }
};

exports.authorizeRole = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ msg: "Forbidden: Role not allowed" });
        }
        next();
    };
};