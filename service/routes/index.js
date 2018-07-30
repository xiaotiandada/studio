module.exports = (app) => {

  const data = {
      admin: {
          roles: ['admin'],
          token: 'admin',
          introduction: '我是超级管理员',
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          name: 'Super Admin'
      },
      editor: {
          roles: ['editor'],
          token: 'editor',
          introduction: '我是编辑',
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          name: 'Normal Editor'
      }
  }

  app.post('/api/adminlogin', function (req, res) {
    console.log(req.body.username)
      const username = req.body.username
      res.send( data[username])
  })

    app.get('/api/userinfo', function (req, res) {
      console.log(req.url)

       let param2Obj = function (url) {
            const search = url.split('?')[1]
            if (!search) {
                return {}
            }
            return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
        }

        const { token } = param2Obj(req.url)
        console.log(token)
        if(data[token]){
            res.send(data[token])
            return true
        } else {
          res.send({})
          return false
        }

    })
}
