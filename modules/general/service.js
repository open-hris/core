const Repository = require('./repository');
const Mapper = require('./mapper');
const GenericResponseEntity = require('../../utilities/entities');
const fs = require('fs');

module.exports = class ConsumeKafkaService {

  constructor(option) {
    this.repository = option?.repository || new Repository();
    this.mapper = option?.mapper || new Mapper();
  }

  async initializationStatus(req) {
    const response = new GenericResponseEntity();
    const generalSettings = await this.repository.getGeneralSettings();

    const data = {}
    data.isReadyToUse = generalSettings.length > 0;

    response.success = true;
    response.data = data;
    return response;
  }

  async boilerplate(req) {
    const response = new GenericResponseEntity();
    // read default-configuration.json
    const defaultConfiguration = JSON.parse(fs.readFileSync('./default-configuration.json', 'utf8'));

    response.success = true;
    response.data = defaultConfiguration;
    return response;
  }

};
