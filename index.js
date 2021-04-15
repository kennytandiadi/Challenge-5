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

//user login
const users =[]

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login', (req,res)=>{
    const{user,password} = req.body
    users.push({email,password})
    console.log(users);
    res.redirect('/game')
})

app.get('/users',(req,res,next)=>{
    res.json([{
        id:'Kenny',
        password:'kenny'
    },{
        id:'Tandiadi',
        password:'tandiadi'
    }])
})

app.listen(PORT, () =>{
    console.log(`app is listening on PORT ${PORT}`)
})