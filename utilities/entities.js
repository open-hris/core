class GenericResponseEntity {
    success = false;
    message = null;
    error = [];
    data = null;
    summary = null;
    statusCode = 400;
    startTime = 0;

    constructor() {
        this.startTime = new Date().getTime();
    }

    toResponse() {
        this.statusCode = this.success ? 200 : (this.statusCode ?? 400);

        return {
            statusCode: this.statusCode,
            success: this.success,
            message: this.message,
            error: this.error,
            summary: this.summary,
            data: this.data,
            responseTime: this.startTime ? new Date().getTime() - this.startTime : 'unknown',
        };
    }

}

module.exports = GenericResponseEntity;
