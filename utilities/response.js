const GenericResponseEntity = require('./entities');

const httpResponse = (entity, res) => {
    if (entity instanceof GenericResponseEntity) {
        const response = entity.toResponse();

        res.status(response.statusCode).send({
            success: response.success,
            message: response.message,
            data: response.data,
            error: response.error,
            responseTime: response.responseTime,
        });
        return;
    }

    res.status(500);
};

module.exports = {
    httpResponse,
};
