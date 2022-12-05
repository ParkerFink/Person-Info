const express = require('express')
const app = express()
const fs = require('fs')
const port = 1234
const ip = '127.0.0.1'
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')



app.get('/', function(req,res){
    res.render('index.ejs')
})

app.post('/', function(req,res){
    res.render('index.ejs')
    let person = {
        name: req.body.name,
        age: req.body.age,
        birthday: req.body.birthday,
        height: req.body.height,
        addinfo: req.body.height
    }
    stringData = JSON.stringify(person)
    fs.writeFileSync('People/' + person.name + '.txt', stringData)
    console.log("Person was filed")
})


app.listen(port, ip, function(){
    console.log("Server Up")
})