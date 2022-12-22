const paymentRoutes = require('express').Router()
const { PaymentController } = require('../controllers')

//EJS Page
paymentRoutes.get('/', PaymentController.getData)
paymentRoutes.get('/addPage', PaymentController.addPaymentPage)
paymentRoutes.get('/editPage', PaymentController.editPaymentPage)

//CRUD
paymentRoutes.post('/add', PaymentController.addPayment)
paymentRoutes.get('/delete/:paymentId', PaymentController.deletePayment)
paymentRoutes.post('/update/:paymentId', PaymentController.updatePayment)

module.exports = paymentRoutes