const NewVehicle = require("../commands/new_vehicle")
const UpdateVehicle = require("../commands/update_vehicle")
const RemoveVehicle = require("../commands/remove_vehicle")
const GetVehicle = require("../commands/get_vehicle")
const ListVehicles = require("../commands/list_vehicles")

class Vehicle {
    constructor(licensePlate, brand, model, version, year) {
        this.licensePlate = licensePlate
        this.brand = brand
        this.model = model
        this.version = version
        this.year = year
    }

    newVehicle() {
        return new NewVehicle(this.licensePlate, this.brand, this.model, this.version, this.year)
    }

    updateVehicle(currentLicensePlate){
        return new UpdateVehicle(this.licensePlate, this.brand, this.model, this.version, this.year, currentLicensePlate)
    }

    removeVehicle(){
        return new RemoveVehicle(this.licensePlate)
    }

    getVehicle(){
        return new GetVehicle(this.licensePlate)
    }

    listVehicles() {
        return new ListVehicles()
    }
}

module.exports = Vehicle

