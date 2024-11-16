const { Router } = require("express");
const AdminCtl = require('../controllers/admin-panel-controller');
const { adminAuth } = require("../middleware/login-auth");

// Aprouter = Admin panel routings
const Aprouter = Router();

Aprouter.post('/create', adminAuth , AdminCtl.cerateAdmin);
Aprouter.get('/', adminAuth , AdminCtl.homePage);
Aprouter.get('/add_admin',adminAuth , AdminCtl.addadminPage);
Aprouter.get('/view_admin',adminAuth , AdminCtl.viewadminPage);
Aprouter.get('/edit_admin/:id', AdminCtl.editadminPage);
Aprouter.get('/login', AdminCtl.loginPage);
Aprouter.post('/login', AdminCtl.login);
Aprouter.get('/signup', AdminCtl.signupPage);

module.exports = Aprouter;