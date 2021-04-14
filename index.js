const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'))

app.set('view engine','ejs') 
app.set('views','./views')

app.get('/',(req,res)=>{
    res.render('Home')
})

app.get('/game',(req,res)=>{
    res.render('Game')
})

app.listen(PORT, () =>{
    console.log(`app is listening on PORT ${PORT}`)
})