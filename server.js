const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Load routes and model from the frontend folder (copied here as well)
const wasteRoutes = require("./wasteRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// request logger
app.use((req, res, next) => {
  console.log(new Date().toISOString(), req.method, req.url);
  next();
});

// health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// connect to local MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/wasteDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// API
app.use("/api/waste", wasteRoutes);

// serve frontend static files from the frontend folder
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// serve index.html at root explicitly
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

process.on('uncaughtException', err => console.error('uncaughtException', err && err.stack ? err.stack : err));
process.on('unhandledRejection', err => console.error('unhandledRejection', err));
