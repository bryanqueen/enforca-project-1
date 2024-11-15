const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes/route')
const port = process.env.PORT || 8181;
require('dotenv').config();



//Initialise App
const app = express();

//Healthcheck
app.get('/', (req, res) => {
    res.send('Welcome to Enforca API')
})


//Middlewares
app.use(express.json());
app.use(cors());

//Routes Middleware
app.use('/auth', authRoutes)

//Listen to app's port
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
});
