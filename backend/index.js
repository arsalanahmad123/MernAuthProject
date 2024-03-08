const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database')
const authRoute = require('./Routes/auth.route')

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect the database
connectDB();

// testing homepage for api 

app.use('/api/v2', authRoute);
app.get('/hello', (req,res) => { res.send('Hello World') })




app.listen(3000, () => {
    console.log('Server started on port 3000');
})
