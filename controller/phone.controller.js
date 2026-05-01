const createHttpError = require('http-errors');
const { Phone } = require('./../models');

module.exports.getPhoneAll = async (req, res, next) => {
  const { limit = 5, skip = 0 } = req.query;
  console.log('limit, skip :>> ', limit, skip);
  try {
    const foundPhones = await Phone.find().limit(limit).skip(skip);

    res.status(200).send(foundPhones);
  } catch (err) {
    next(err);
  }
};
module.exports.createPhone = async (req, res, next) => {
  const { body } = req;
  try {
    const createdPhone = await Phone.create(body);

    res.status(201).send({ data: createdPhone });
  } catch (err) {
    next(err);
  }
};
module.exports.getPhoneById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const foundPhone = await Phone.findById(id);

    if (!foundPhone) {
      return next(createHttpError(404, 'Phone not found'));
    }
    res.status(200).send(foundPhone);
  } catch (err) {
    next(err);
  }
};
module.exports.updatePhoneByid = async (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;

  try {
    const updatePhone = await Phone.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatePhone) {
      return next(createHttpError(404, 'Phone not found'));
    }
    res.status(200).send(updatePhone);
  } catch (err) {
    next(err);
  }
};
module.exports.deletePhoneByid = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletePhone = await Phone.findByIdAndDelete(id);
    if (!deletePhone) {
      return next(createHttpError(404, 'User Not Found'));
    }
    res.status(200).send('Phone is delete');
  } catch (err) {
    next(err);
  }
};
