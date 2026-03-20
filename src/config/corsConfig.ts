import { CorsOptions } from "cors";

// Different CORS policies for different API sections
export const publicCorsOptions: CorsOptions = {
    origin: process.env.ALLOWED_ORIGINS?.split(",") || [], // Allow origins from env vars
    methods: ["GET", "POST", "PUT", "DELETE"], // Methods allowed
    allowedHeaders: ["Content-Type", "Authorization"], // Prevents browsers from incorrectly interpreting data types
    maxAge: 7200, // Recommended maxAge for inflight caching for Chromium as mentioned in MDN Web Docs
};