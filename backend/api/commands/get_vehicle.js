const Command = require('./command')

class GetVehicle extends Command {

    constructor(licensePlate, brand, model, version, year) {
        super(licensePlate, brand, model, version, year)
    }
}

module.exports = GetVehicle