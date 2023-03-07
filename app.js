const express = require('express')
const app = express();

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.render('index', {titulo: 'Violino Épico Academy'})
})

app.listen(8081, ()=>{
  console.log('Listening to port 8081')
})