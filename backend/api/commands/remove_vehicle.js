const Command = require('./command')

class RemoveVehicle extends Command {

    constructor(licensePlate, brand, model, version, year) {
        super(licensePlate, brand, model, version, year)
    }
}

module.exports = RemoveVehicle