// config/cors.js
import cors from "cors";

// Define whitelist of allowed origins
const whitelist = ["http://localhost:3000", "*"];

// Configure CORS options
export const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Use corsOptions directly without default export
export default cors(corsOptions);
