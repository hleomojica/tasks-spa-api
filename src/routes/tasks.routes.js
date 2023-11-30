const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks.controller');

// Get all tasks
router.get('/', tasksController.get);

// Get one center
// router.get('/:id', getCenter, (req, res) => {
//     res.json(res.center);
// });

router.post('/', tasksController.create);
router.put('/:id', tasksController.update);

// // Delete one center
// router.delete('/:id', getCenter, async (req, res) => {
//     try {
//         await res.center.remove();
//         res.json({ message: 'Deleted Center' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// async function getCenter(req, res, next) {
//     let center;
//     try {
//         center = await Center.findById(req.params.id);
//         if (center == null) {
//             return res.status(404).json({ message: 'Cannot find center' });
//         }
//     } catch (err) {
//         return res.status(500).json({ message: err.message });
//     }

//     res.center = center;
//     next();
// }

module.exports = router;