const router = require('express').Router();
const User = require('../model/User')

router.post('/register', async(req, res) => {
    console.log(req.body)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    // return res.json(user)
    try{
        const savedUser = await user.save();
        return res.json(savedUser);
    }catch(err){
        res.status(400).json(err)
    }
    
});

module.exports = router;
