const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const City = require('./backend/City')

// Setting 
const port = process.env.PORT || 5000
// const uri = "mongodb+srv://admin:passadmin@mytinerary-ipcio.mongodb.net/mytinerary?retryWrites=true&w=majority";
const uri = "mongodb+srv://dev:dev2019@clustertest-imp38.mongodb.net/citiesdb?retryWrites=true&w=majority";
app.use(cors())
// conexion con la bd mongo
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(res => {
    console.log("Conect")
})
.catch(err => console.log("Err", err))

// Middlewares

// Routes (rutas definidas)
// app.get('/', (req, res) => res.send("fhsfhshdf"))

app.get('/cities', async (req, res) => {
   const cities = await City.find()
   res.send(cities)
})

app.get('/cities/:id', async (req, res) => {
    const city = await City.findById(req.params.id)
    res.send(city)
})


// Static files (archivos a mostrar segun la url)
app.use(express.static(path.join(__dirname, 'public')))



app.listen(port, () => console.log('Server running on port ' + port))

