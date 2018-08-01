const AuthenticationControlles = require('../controllers/controllers')


module.exports = (app) => {
    app.post('/api/adminlogin',AuthenticationControlles.userAdminLogin)
    app.post('/api/logout', AuthenticationControlles.userLogout)
    app.get('/api/userinfo', AuthenticationControlles.userInfo)
}
