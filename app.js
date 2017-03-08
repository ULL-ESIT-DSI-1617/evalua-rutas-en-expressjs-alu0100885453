var express = require('express')
var app = express()


app.use(express.static('public'))

//app.use('/static', express.static(path.join(_dirname, 'public')))

app.listen(3000, function () {
  console.log('escuchando puerto 3000!')
})