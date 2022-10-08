const express = require('express');
const path = require('path')
const app = express();
const publicPath = path.resolve(__dirname, './public')
const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"./views/home.html"))
})

app.use(express.static('public'))

app.listen(PORT, ()=>console.log('servidor corriendo en puerto 3000'))


 
app.get('/register', (req,res)=>{
     res.sendFile(path.join(__dirname, './views/register.html'))
})
app.get('/login', (req,res)=>{
     res.sendFile(path.join(__dirname, './views/login.html'))
})