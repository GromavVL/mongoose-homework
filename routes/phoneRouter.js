const { Router } = require('express');
const { phoneController } = require('../controller');

const phoneRouter = Router();

phoneRouter
  .route('/')
  .get(phoneController.getPhoneAll)
  .post(phoneController.createPhone);

phoneRouter
  .route('/:id')
  .get(phoneController.getPhoneById)
  .patch(phoneController.updatePhoneByid)
  .delete(phoneController.deletePhoneByid);

module.exports = phoneRouter;
