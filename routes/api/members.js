const express = require('express');
const router = express.Router();
const members = require('../../Members');

// get all members
router.get('/', (req, res) => res.json(members));

// get single Member
router.get('/:id', (req, res) => {
    const found = members.filter(
        (member) => member.id === parseInt(req.params.id)
    );
    if (found[0]) {
        res.json(found);
    } else {
        res.status(400).json({ msg: 'No member found' });
    }
});

// Create Member
router.post('/', (req, res) => {
    const newMember = {
        id: 10,
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include a name and email' });
    }

    members.push(newMember);
    res.json(members);

    // for form to work properly
    //res.redirect('/');
});

module.exports = router;
