const mongoose = require("mongoose");

const WasteSchema = new mongoose.Schema({
  wasteType: String,
  description: String,
  qrData: String,
  qrCode: String,
  status: { type: String, default: "Registered" }
});

module.exports = mongoose.model("Waste", WasteSchema);
