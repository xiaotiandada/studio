var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/adminlogin', function(req, res, next) {
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
    const username = req.body.username
    console.log(username)
    res.send(data)
});

router.get('/userinfo', function (req, res, next) {
    res.send({
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
    })
})

module.exports = router;
