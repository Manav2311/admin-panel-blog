const { Router } = require("express");
const AdminCtl = require('../controllers/admin-panel-controller');
const { adminAuth } = require("../middleware/login-auth");

// Aprouter = Admin panel routings
const Aprouter = Router();

Aprouter.get('/', adminAuth , AdminCtl.homePage);
Aprouter.post('/create', AdminCtl.cerateAdmin);
Aprouter.get('/add_admin', AdminCtl.addadminPage);
Aprouter.get('/view_admin', AdminCtl.viewadminPage);
Aprouter.get('/edit_admin/:id', AdminCtl.editadminPage);
Aprouter.get('/login', AdminCtl.loginPage);
Aprouter.post('/login', AdminCtl.login);
Aprouter.get('/signup', AdminCtl.signupPage);

module.exports = Aprouter;