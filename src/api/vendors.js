const express = require("express");
const router = express.Router();

// Dummy in-memory vendor data
let vendors = [
    {
        id: 1,
        name: "Juan's Street Food",
        food: "Fishball, Kwek-Kwek",
        location: "Barangay 1",
        latitude: 13.9414,
        longitude: 120.7342,
        availability: "Available"
    },
    {
        id: 2,
        name: "Meryen's Food Cart",
        food: "Burger, Fries",
        location: "Town Center",
        latitude: 13.9401,
        longitude: 120.7330,
        availability: "Available"
    }
];

// GET /vendors
// Retrieve all vendors
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        count: vendors.length,
        data: vendors
    });
});

// POST /vendors
// Add a new vendor
router.post("/", (req, res) => {
    const {
        name,
        food,
        location,
        latitude,
        longitude,
        availability
    } = req.body;

    // Validate required fields
    if (
        !name ||
        !food ||
        !location ||
        latitude === undefined ||
        longitude === undefined ||
        !availability
    ) {
        return res.status(400).json({
            success: false,
            message: "All vendor fields are required."
        });
    }

    const newVendor = {
        id: vendors.length + 1,
        name,
        food,
        location,
        latitude,
        longitude,
        availability
    };

    vendors.push(newVendor);

    res.status(201).json({
        success: true,
        message: "Vendor added successfully.",
        data: newVendor
    });
});

module.exports = router;