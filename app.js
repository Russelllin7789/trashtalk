// require related modules for this project
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateNonsense = require('./generate_trash')
const app = express()
const port = 3000

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/public'))

//setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body.target
  const nonsense = generateNonsense(option)
  res.render('index', { nonsense })
})

app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})