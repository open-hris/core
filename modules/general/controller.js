const { httpResponse } = require('../../utilities/response');
const Service = require('./service');

module.exports = class Controller {
  constructor() {
    this.service = new Service();
  }

  async initializationStatus(req, res, next) {
    httpResponse(await this.service.initializationStatus(req), res);
  }

  async boilerplate(req, res, next) {
    httpResponse(await this.service.boilerplate(req), res);
  }

}
