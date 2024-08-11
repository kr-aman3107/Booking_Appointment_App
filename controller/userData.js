const UserData = require('../models/userData');
const path = require('path');
const rootDir = require('../util/path');

exports.getUserData = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
}

exports.postUserData = (req, res, next) => {
    const { username, phonenumber, email } = req.body;
    UserData.create({ username, phonenumber, email })
        .then(() => res.status(201).json({ message: 'User created' }))
        .catch(err => {
            console.error('Error saving user data:', err);
            res.status(500).send('Error saving user data');
        });
}

exports.getAllUsers = (req, res, next) => {
    UserData.findAll()
        .then(users => res.json(users))
        .catch(error => {
            console.error('Error fetching users:', error);
            res.status(500).send('Server Error');
        });
}

exports.updateUser = (req, res, next) => {
    const id = req.params.id;
    const { username, phonenumber, email } = req.body;
    
    UserData.findById(id)
        .then(user => {
            if (user) {
                user.username = username;
                user.phonenumber = phonenumber;
                user.email = email;
                return user.save();
            } else {
                res.status(404).send('User not found');
            }
        })
        .then(() => res.status(200).json({ message: 'User updated' }))
        .catch(error => {
            console.error('Error updating user:', error);
            res.status(500).send('Server Error');
        });
}

exports.deleteUser = (req, res, next) => {
    const id = req.params.id;

    UserData.findById(id)
        .then(user => {
            if (user) {
                return user.destroy();
            } else {
                res.status(404).send('User not found');
            }
        })
        .then(() => res.status(200).json({ message: 'User deleted' }))
        .catch(error => {
            console.error('Error deleting user:', error);
            res.status(500).send('Server Error');
        });
}
UserData.findById = function (id) {
    return this.findOne({ where: { id: id } });
}