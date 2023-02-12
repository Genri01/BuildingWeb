const { Router } = require('express');  
const userController = require('../controllers/user_controller')
const infoRouter = Router() 
 
infoRouter.post('/sendmini',userController.sendMini); 
infoRouter.post('/sendfull',userController.sendFull);  
infoRouter.post('/sendref',userController.sendReferal);  

module.exports = infoRouter;
