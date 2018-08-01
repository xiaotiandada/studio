const user  = require('../model/user')
const userAdmin  = require('../model/userAdmin')

module.exports = {
    async userAdminLogin (req, res) {
        const data = {
            username : req.body.username
        }
        try {
            await userAdmin.findOne(data, function (err, userAdmin) {
                console.log(userAdmin)

                if (err) {
                    throw err
                }
                if(userAdmin){
                    res.send(userAdmin)
                } else {
                    res.send({})
                    return false
                }

            })
        }catch (e) {
            console.log(e)
            res.send({

            })
            return false
        }
    },

    userLogout (req, res) {
      try {
          console.log('success')
          res.send({
              success: 'success'
          })
          return true
      }  catch (e) {
          console.log(e)
          return false
      }
    },

    async userInfo (req, res) {

        const param2Obj = function (url) {
            const search = url.split('?')[1]
            if (!search) {
                return {}
            }
            return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
        }

        const { token } = param2Obj(req.url)

        console.log(token)

        const data = {
            token: token
        }

        try {
            await userAdmin.findOne(data, function (err, userinfo) {
                if(err){
                    throw err
                }

                console.log(userinfo)
                if(userinfo){
                    res.send(userinfo)
                    return true
                } else {
                    res.send({})
                    return false
                }
            })

        }
        catch (e) {
            console.log(e)
            return false
        }
    }

}
