const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true
  }
)

const Users = mongoose.model('Users', UsersSchema)

module.exports = Users
