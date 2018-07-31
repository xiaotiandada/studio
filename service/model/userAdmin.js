const mongoose = require('./index')

const Schema = mongoose.Schema
var UserAdminSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    roles: {
        type: Array,
        default: [
            'admin'
        ]
    },
    token: {
        type: String,
        default: 'admin'
    },
    introduction: {
        type: String,
        default: '我是超级管理员'
    },
    avatar: {
        type: String,
        default: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
    },
    name: {
        type: String,
        default: 'Super Admin'
    },
    createTime: {
        type: Date,
        default: Date.now
    }})

module.exports = mongoose.model('User_admin', UserAdminSchema)


// var User = mongoose.model('User_admin', UserAdminSchema)
//
// var user = new User
// user.username = 'editor'
// user.password = 'editor'
// user.roles = ['editor']
// user.token = 'editor'
// user.introduction = '我是编辑'
// user.name = 'Normal Editor'
// user.save()
//         .then( () => {
//           console.log('创建成功')
//         })

