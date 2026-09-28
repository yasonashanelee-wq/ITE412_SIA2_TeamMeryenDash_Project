const express = require("express");
const vendorRoutes = require("./vendors");
const nearbyVendorRoutes = require("./nearbyVendors");

const app = express();
const PORT = 3000;

// Allows the API to receive JSON data
app.use(express.json());

app.use("/vendors", vendorRoutes);
app.use("/nearby-vendors", nearbyVendorRoutes);

// Test route
app.get("/", (req, res) => {
    res.json({
        success: true,
        system: "MeryenDash: Vendor Locator Platform",
        message: "MeryenDash REST API is running"
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Endpoint not found"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`MeryenDash REST API running at http://localhost:${PORT}`);
});

module.exports = app;