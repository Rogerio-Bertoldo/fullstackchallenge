const Command = require('./command')

class NewVehicle extends Command {

    constructor(licensePlate, brand, model, version, year) {
        super(licensePlate, brand, model, version, year)
    }
}

module.exports = NewVehicle