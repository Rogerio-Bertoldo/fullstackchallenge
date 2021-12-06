const NewVehicle = require('../commands/new_vehicle')
const UpdateVehicle = require('../commands/update_vehicle')
const RemoveVehicle = require('../commands/remove_vehicle')
const GetVehicle = require('../commands/get_vehicle')
const ListVehicles = require('../commands/list_vehicles')
const { errorCodes } = require('../domain/error_mapping')

const newVehicle = async (cmd, db) => {
    console.log("Handler para criacao de novo veiculo")
    return new Promise(async (resolve, reject) => {
        const vehicleExists = await db('vehicles').where("license_plate", cmd.licensePlate).first()
        if (vehicleExists) {
            reject({ errorCode: errorCodes.VEHICLE_ALREADY_EXISTS })
        }
        db('vehicles')
            .insert({
                license_plate: cmd.licensePlate,
                brand: cmd.brand,
                model: cmd.model,
                version: cmd.version,
                year: cmd.year
            })
            .then(resolve)
            .catch(() => reject({ errorCode: errorCodes.INSERT_ERROR }))
    })
}


const updateVehicle = async (cmd, db) => {
    console.log("Handler para atualização de informações de veiculo")
    return new Promise(async (resolve, reject) => {
        const vehicleExists = await db('vehicles').where("license_plate", cmd.currentLicensePlate).first()
        if (!vehicleExists) {
            reject({ errorCode: errorCodes.VEHICLE_NOT_FOUND })
        }

        db('vehicles')
            .update(
                {
                    license_plate: cmd.licensePlate,
                    brand: cmd.brand,
                    model: cmd.model,
                    version: cmd.version,
                    year: cmd.year
                }
            )
            .where("license_plate", cmd.currentLicensePlate)
            .then(resolve)
            .catch(() => reject({ errorCode: errorCodes.UPDATE_ERROR }))
    })
}


const removeVehicle = async (cmd, db) => {
    console.log("Handler para remoção de veículo")
    return new Promise(async (resolve, reject) => {
        const vehicleExists = await db('vehicles').where("license_plate", cmd.licensePlate).first()
        if (!vehicleExists) {
            reject({ errorCode: errorCodes.VEHICLE_NOT_FOUND })
        }

        db('vehicles')
            .where("license_plate", cmd.licensePlate)
            .del()
            .then(resolve)
            .catch(() => reject({ errorCode: errorCodes.DELETE_ERROR }))
    })
}

const getVehicle = async (cmd, db) => {
    console.log("Handler para obtenção de veículo")
    return new Promise(async (resolve, reject) => {
        const vehicleExists = await db('vehicles').where("license_plate", cmd.licensePlate).first()
        if (!vehicleExists) {
            reject({ errorCode: errorCodes.VEHICLE_NOT_FOUND })
        }

        db('vehicles')
            .where("license_plate", cmd.licensePlate)
            .first()
            .then(resolve)
            .catch(() => reject({ errorCode: errorCodes.SELECT_ERROR }))
    })
}

const getVehicles = async (cmd, db) => {
    console.log("Handler para listar veículos")

    return new Promise(async (resolve, reject) => {
        const vehicleExists = await db('vehicles').first()
        if (!vehicleExists) {
            reject({ errorCode: errorCodes.VEHICLE_NOT_FOUND })
        }

        db('vehicles')
            .then(resolve)
            .catch(() => reject({ errorCode: errorCodes.SELECT_ERROR }))
    })

}

const handlers = {
    [NewVehicle.name]: newVehicle,
    [UpdateVehicle.name]: updateVehicle,
    [RemoveVehicle.name]: removeVehicle,
    [GetVehicle.name]: getVehicle,
    [ListVehicles.name]: getVehicles,
}

module.exports = handlers