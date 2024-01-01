const User = require('../models/user.model')
const bcrypt = require('bcryptjs');
const registerUser = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ message: 'User already exists' })
        }
        else {
            const hashedPassword = await bcrypt.hashSync(password, 10)
            const newUser = new User({ username, email, password: hashedPassword })
            await newUser.save()
            res.status(201).json({ message: 'User created successfully', data: newUser })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Invalid password' })
        }
        res.status(200).json({ message: 'Login successful', data: user })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    registerUser, login
}