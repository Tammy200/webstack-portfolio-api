import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "gift",
        lastname: "gold",
        age: 27
    },
{
    firstName: "eric",
    lastName: "wellignton",
    age: 20
}
]

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    users.push(user);

    res.send(`User with the name ${user.firstName} added to the database!`);
});

export default router;