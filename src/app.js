import express from "express";
import indexRoutes from "./routes/index.js";
import urlRoutes from "./routes/urlRoutes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/api", urlRoutes);

export default app;
