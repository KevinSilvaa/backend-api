const { Router } = require('express');

const UsersController = require('../controllers/UsersController');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const userController = new UsersController()
    
// *Rotas da aplicação
usersRoutes.post('/', userController.create);
usersRoutes.put('/', ensureAuthenticated, userController.update);

module.exports = usersRoutes;
