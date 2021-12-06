const Command = require('./command')

class UpdateVehicle extends Command {

    constructor(licensePlate, brand, model, version, year, currentLicensePlate) {
        super(licensePlate, brand, model, version, year)
        this.currentLicensePlate = currentLicensePlate
    }
}

module.exports = UpdateVehicle