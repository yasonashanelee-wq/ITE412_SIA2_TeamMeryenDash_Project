const express = require("express");
const router = express.Router();

// Dummy in-memory nearby vendor data
let nearbyVendors = [
    {
        id: 1,
        vendorName: "Juan's Street Food",
        distanceKm: 0.5,
        location: "Barangay 1",
        availability: "Available"
    },
    {
        id: 2,
        vendorName: "Meryen's Food Cart",
        distanceKm: 1.2,
        location: "Town Center",
        availability: "Available"
    }
];

// GET /nearby-vendors
// Retrieve nearby vendors
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        count: nearbyVendors.length,
        data: nearbyVendors
    });
});

// POST /nearby-vendors
// Add a nearby vendor
router.post("/", (req, res) => {
    const {
        vendorName,
        distanceKm,
        location,
        availability
    } = req.body;

    // Validate required fields
    if (
        !vendorName ||
        distanceKm === undefined ||
        !location ||
        !availability
    ) {
        return res.status(400).json({
            success: false,
            message: "All nearby vendor fields are required."
        });
    }

    const newNearbyVendor = {
        id: nearbyVendors.length + 1,
        vendorName,
        distanceKm,
        location,
        availability
    };

    nearbyVendors.push(newNearbyVendor);

    res.status(201).json({
        success: true,
        message: "Nearby vendor added successfully.",
        data: newNearbyVendor
    });
});

module.exports = router;