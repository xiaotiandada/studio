const user  = require('../model/user')
const userAdmin  = require('../model/userAdmin')

module.exports = {
    userAdminLogin (req, res) {
        try {
            userAdmin.findOne({
                username : req.body.username
            },function (err, userAdmin) {
                console.log(userAdmin)
                if(err) {
                    throw err
                }
                if(userAdmin) {
                    res.send(userAdmin)
                } else {
                    res.send({})
                }
            })
        }catch (e) {
            console.log(e)
            res.send({})
            return false
        }
    }
}
