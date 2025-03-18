import { Router } from "express";
import User from "../models/user.model.js";
const router = Router();

router.route('/').get(async(req, res) => {

    const {username, email, password} = req.body;

    const newUser = new User({
        username, 
        email,
        password
    });

   await  newUser.save().then(() => {
    res.json("User added")
   }).catch((err) => {
    console.log(err)
   })
});


router.route('/get').post((async(req, res) => {
    await User.find().then((users) => {
        res.json(users)
    }).catch((err) => {
        console.log(err)
    })
}));

router.route('/update/:id').put(async(req, res) => {
    let userId = req.params.id;

    const{username, email, password} = req.body;
    
    const updateUser =({
        username,
        email,
        password
    });

    const update = await User.findByIdAndUpdate(userId, updateUser).then(() => {
        res.status(200).send({status : "User updated"}, updateUser);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error with updating data"});
    })
});

router.route('/delete/:id').delete(async(req, res) => {

    let userId = req.params.id;

    await User.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status : "User deleted"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error with deleting user"});
    });
});


router.route('/get/:id').get(async(req, res) => {

    let userId = req.params.id;

    const fetchedUser = await User.findById(userId).tehn((user) => {
        res.status(200).send({status : 'User fetched'}, fetchedUser);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error with fetching user"});
    })
})

export default router;