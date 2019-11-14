const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')

const City = require('./backend/City')

// Setting 
const port = process.env.PORT || 5000
const uri = "mongodb+srv://admin:passadmin@mytinerary-ipcio.mongodb.net/mytinerary?retryWrites=true&w=majority";


// conexion con la bd mongo
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(res => {
    console.log("Conect")
})
.catch(err => console.log("Err", err))

// Middlewares

// Routes (rutas definidas)
app.get('/', (req, res) => res.send("fhsfhshdf"))

app.get('/cities', async (req, res) => {
   const cities = await City.find()
   res.send(cities)
})


// Static files (archivos a mostrar segun la url)
app.use(express.static(path.join(__dirname, 'public')))



app.listen(port, () => console.log('Server running on port ' + port))

