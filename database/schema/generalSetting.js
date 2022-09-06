const mongoose = require('mongoose')

const GeneralSettingSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,

    },
    value: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true
  }
)

const GeneralSetting = mongoose.model('GeneralSetting', GeneralSettingSchema)

module.exports = GeneralSetting
