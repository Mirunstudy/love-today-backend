import express from 'express';
import  {placeOrder,placeOrderStripe,placeOrderPaypal,allOrders,userOrders,updateStatus, verifyStripe} from "../controllers/orderController.js"
import adminAuth from './../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router()

//Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//Payment Features
orderRouter.post('/place',authUser ,placeOrder)
orderRouter.post('/stripe',authUser ,placeOrderStripe)
orderRouter.post('/razorpay',authUser ,placeOrderPaypal)

//User feature
orderRouter.post('/userorders',authUser,userOrders)

//Verify payment
orderRouter.post('./verifystripe',authUser,verifyStripe)

export default orderRouter