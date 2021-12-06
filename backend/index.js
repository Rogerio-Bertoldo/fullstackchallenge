const express = require('express')
const status = require('http-status')
const { errorMessages, httpStatus } = require('./api/domain/error_mapping')
const db = require('./config/db/db')
const handlers = require('./api/handlers/handlers')
const Vehicle = require('./api/dto/vehicle')

const app = express()
const port = 3000

const handleCommand = async (req, res, command, shouldSendResponseMsg = false) => {
  handlers[command.constructor.name](command, db)
    .then((response) => res.status(status.OK).send(shouldSendResponseMsg ? JSON.stringify(response) : {}))
    .catch(error => {
      res.status(httpStatus[error.errorCode]).send({ message: errorMessages[error.errorCode] })
    })
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/health', async (req, res) => {
  res.send('Server Ok!')
})

app.post('/vehicle', async (req, res) => {
  const command = Object.assign(new Vehicle(), req.body).newVehicle()
  handleCommand(req, res, command)
})

app.put('/vehicle/:licensePlate', async (req, res) => {
  const command = Object.assign(new Vehicle(), req.body).updateVehicle(req.params.licensePlate)
  handleCommand(req, res, command)
})

app.delete('/vehicle/:licensePlate', async (req, res) => {
  const command = (new Vehicle(licensePlate = req.params.licensePlate)).removeVehicle()
  handleCommand(req, res, command)
})

app.get('/vehicle/:licensePlate', async (req, res) => {
  const command = (new Vehicle(licensePlate = req.params.licensePlate)).getVehicle()
  handleCommand(req, res, command, shouldSendResponseMsg = true)
})

app.get('/vehicles', async (req, res) => {
  const command = (new Vehicle(licensePlate = req.params.licensePlate)).listVehicles()
  handleCommand(req, res, command, shouldSendResponseMsg = true)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})