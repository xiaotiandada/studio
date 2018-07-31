const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studio',  { useNewUrlParser: true } )
    .then(function (response) {
        console.log('success' + response)
    }).catch(function (err) {
        console.log('err' + err)
    })

module.exports = mongoose
