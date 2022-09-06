const GeneralSetting = require('../../database/schema/generalSetting');

module.exports = class Repository {

  async getGeneralSettings(key) {
    if (key) {
      return await GeneralSetting.findOne({ key });
    } else {
      return await GeneralSetting.find();
    }
  }

}
