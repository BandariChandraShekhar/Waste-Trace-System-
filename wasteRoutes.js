const express = require("express");
const QRCode = require("qrcode");
let Waste;
try {
  Waste = require("./Waste");
} catch (e) {
  Waste = null;
}

const router = express.Router();

// in-memory fallback store when MongoDB is unavailable
const inMemory = [];

async function generateQRCode(data) {
  return QRCode.toDataURL(data);
}

// Register Waste
router.post("/register", async (req, res) => {
  const { wasteType, description } = req.body;
  const qrData = wasteType + "-" + Date.now();
  const qrCode = await generateQRCode(qrData);

  if (Waste) {
    try {
      const waste = new Waste({ wasteType, description, qrData, qrCode });
      await waste.save();
      return res.json(waste);
    } catch (err) {
      console.log("DB save failed, using in-memory store", err.message || err);
    }
  }

  const fallback = {
    _id: Date.now().toString(),
    wasteType,
    description,
    qrData,
    qrCode,
    status: "Registered"
  };
  inMemory.push(fallback);
  res.json(fallback);
});

// Update Status
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const status = req.body.status;

  if (Waste) {
    try {
      const waste = await Waste.findByIdAndUpdate(id, { status }, { new: true });
      if (waste) return res.json(waste);
    } catch (err) {
      console.log("DB update failed, falling back to in-memory", err.message || err);
    }
  }

  const idx = inMemory.findIndex(w => w._id == id);
  if (idx !== -1) {
    inMemory[idx].status = status;
    return res.json(inMemory[idx]);
  }

  res.status(404).json({ message: "Not found" });
});

// Get All
router.get("/", async (req, res) => {
  if (Waste) {
    try {
      const data = await Waste.find();
      return res.json(data);
    } catch (err) {
      console.log("DB read failed, returning in-memory", err.message || err);
    }
  }
  res.json(inMemory);
});

// Mark as Completed
router.put("/complete/:id", async (req, res) => {
  if (Waste) {
    try {
      const waste = await Waste.findByIdAndUpdate(
        req.params.id,
        { status: "Completed" },
        { new: true }
      );
      return res.json(waste);
    } catch (err) {
      console.log("DB update failed for complete", err.message || err);
    }
  }

  const idx = inMemory.findIndex(w => w._id == req.params.id);
  if (idx !== -1) {
    inMemory[idx].status = "Completed";
    return res.json(inMemory[idx]);
  }

  res.status(404).json({ message: "Not found" });
});

// Reset Waste
router.put("/reset/:id", async (req, res) => {
  if (Waste) {
    try {
      const waste = await Waste.findByIdAndUpdate(
        req.params.id,
        { status: "Registered" },
        { new: true }
      );
      return res.json(waste);
    } catch (err) {
      console.log("DB update failed for reset", err.message || err);
    }
  }

  const idx = inMemory.findIndex(w => w._id == req.params.id);
  if (idx !== -1) {
    inMemory[idx].status = "Registered";
    return res.json(inMemory[idx]);
  }

  res.status(404).json({ message: "Not found" });
});

module.exports = router;
