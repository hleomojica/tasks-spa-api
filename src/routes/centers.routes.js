const express = require('express');
const router = express.Router();
const Center = require('../models/center');

// Get all centers
router.get('/', async (req, res) => {
    try {
        const centers = await Center.find();
        res.json(centers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one center
router.get('/:id', getCenter, (req, res) => {
    res.json(res.center);
});

// Create one center
router.post('/', async (req, res) => {
    const center = new Center({
        name: req.body.name,
        address: req.body.address,
        phone:req.body.phone,
    });

    try {
        const newCenter = await center.save();
        res.status(201).json(newCenter);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update one center
router.patch('/:id', getCenter, async (req, res) => {
    if (req.body.name != null) {
        res.center.name = req.body.name;
    }

    if (req.body.location != null) {
        res.center.location = req.body.location;
    }

    try {
        const updatedCenter = await res.center.save();
        res.json(updatedCenter);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete one center
router.delete('/:id', getCenter, async (req, res) => {
    try {
        await res.center.remove();
        res.json({ message: 'Deleted Center' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getCenter(req, res, next) {
    let center;
    try {
        center = await Center.findById(req.params.id);
        if (center == null) {
            return res.status(404).json({ message: 'Cannot find center' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.center = center;
    next();
}

module.exports = router;