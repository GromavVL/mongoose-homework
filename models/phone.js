const mongoose = require('mongoose');

const phoneShema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 64,
    },
    brand: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 64,
    },
    yearProduction: {
      type: Date,
      required: true,
      max: new Date(),
    },
    sizeRam: {
      type: String,
      required: true,
    },
    cpu: {
      type: String,
      required: true,
    },
    screenDiagonal: {
      type: String,
      required: true,
    },
    isNfc: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: mongoose.ObjectId,
      ref: 'User',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Phone = mongoose.model('Phone', phoneShema);

module.exports = Phone;
