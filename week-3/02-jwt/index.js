const jwt = require('jsonwebtoken');
const { z } = require('zod');

const jwtPassword = "secret";

// Zod schema for user input
const userInputSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6),
});

// Function to sign a JWT token
function signJwt(username, password) {
    try {
        // Validate input using Zod schema
        const userInput = userInputSchema.parse({ username, password });

        // Generate and return the JWT token
        const tokenPayload = { username: userInput.username };
        const tokenOptions = { expiresIn: '1h' };
        return jwt.sign(tokenPayload, jwtPassword, tokenOptions);
    } catch (error) {
        // Return null for validation errors
        return null;
    }
}

// Function to verify if a JWT can be decoded
// Function to decode a JWT without verification
function decodeJwt(token) {
    try {
        const decoded = jwt.decode(token);
        return decoded !== null; // Return true if decoding is successful
    } catch (error) {
        return false; // Decoding failed
    }
}
// Function to verify if a JWT can be verified
function verifyJwt(token) {
    try {
        jwt.verify(token, jwtPassword);
        return true; // Verification successful
    } catch (error) {
        return false; // Verification failed
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
};
