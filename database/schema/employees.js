const mongoose = require('mongoose')

const EmployeesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    placeOfBirth: {
      type: String,
    },
    gender: {
      type: String,
    },
    maritalStatus: {
      type: String,
    },
    identityAndAddress: identityAndAddress,
    families: [families],
    payrollInformation: payrollInformation,
  },
  {
    timestamps: true
  }
)

const identityAndAddress = new mongoose.Schema({
  identityNumber: {
    type: String,
  },
  identityType: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  addressID: {
    type: String,
  },
  addressResidence: {
    type: String,
  },
})

const families = new mongoose.Schema({
  name: {
    type: String,
  },
  relationship: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  identityNumber: {
    type: String,
  },
  maritalStatus: {
    type: String,
  },
  gender: {
    type: String,
  },
  job: {
    type: String,
  },
  address: {
    type: String,
  },
  isEmergencyContact: {
    type: Boolean,
  },
});

const payrollInformation = new mongoose.Schema({
  bankName: {
    type: String,
  },
  bankAccountNumber: {
    type: String,
  },
  bankAccountHolderName: {
    type: String,
  },
  bankAccountHolderAddress: {
    type: String,
  },
  bpjsKesehatanNumber: {
    type: String,
  },
  bpjsKetenagakerjaanNumber: {
    type: String,
  },
  npwpNumber: {
    type: String,
  },
});

const Employees = mongoose.model('Employees', EmployeesSchema)

module.exports = Employees