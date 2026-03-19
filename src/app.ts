import express, { Express } from "express";
import cors from "cors";
import setupSwagger from "../src/config/swaggerConfig";
import resourceRoutes from "../src/api/v1/routes/resourceRoutes";

/**
 * Represents response structure for health check endpoint
 */
interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

// Initialize Express application
const app: Express = express();

app.use(cors());

app.use(express.json());

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Define event routes
app.use("/api/v1", resourceRoutes);

// Define health check route
app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
});

// Setup Swagger
setupSwagger(app);

export default app;