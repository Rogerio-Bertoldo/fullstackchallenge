const status = require('http-status')

const errorCodes = {
    INSERT_ERROR: "001",
    UPDATE_ERROR: "002",
    SELECT_ERROR: "003",
    DELETE_ERROR: "004",
    VEHICLE_NOT_FOUND: "005",
    VEHICLE_ALREADY_EXISTS: "006",
}

const errorMessages = {
    [errorCodes.INSERT_ERROR]: "Falha ao cadastrar novo veículo!",
    [errorCodes.UPDATE_ERROR]: "Falha ao atualizar dados do veículo!",
    [errorCodes.SELECT_ERROR]: "Falha ao obter dados!",
    [errorCodes.DELETE_ERROR]: "Falha ao remover veículo!",
    [errorCodes.VEHICLE_NOT_FOUND]: "Veículo não encontrado!",
    [errorCodes.VEHICLE_ALREADY_EXISTS]: "Falha ao cadastrar novo veículo. Já existe um veículo associado à placa fornecida!",
}

const httpStatus = {
    [errorCodes.INSERT_ERROR]: status.INTERNAL_SERVER_ERROR,
    [errorCodes.UPDATE_ERROR]: status.INTERNAL_SERVER_ERROR,
    [errorCodes.SELECT_ERROR]: status.INTERNAL_SERVER_ERROR,
    [errorCodes.DELETE_ERROR]: status.INTERNAL_SERVER_ERROR,
    [errorCodes.VEHICLE_NOT_FOUND]: status.NOT_FOUND,
    [errorCodes.VEHICLE_ALREADY_EXISTS]: status.UNPROCESSABLE_ENTITY,
}

module.exports = {
    errorCodes,
    errorMessages,
    httpStatus
}