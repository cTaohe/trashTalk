// include express form node_modules
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const trashTalk = require('./trash_talk.js')
const app =express()

// include handlerbars helper
const exphbsHelper = require('./exphbsHelper')

// setting character
const characters = require('./character.json')


// define server related variable
const port = 3000

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static page
app.use(express.static('public'))

// handle request and response
app.get('/', (req, res) => {
  res.render('index', {characters: characters.character})
})

app.post('/', (req, res) => {
  const option = req.body
  const trashSentence = trashTalk(option)
  res.render('index' , { characters: characters.character, option: option, trashSentence: trashSentence })

})

// start and listen the server
app.listen(port, () => {
  console.log(`Experss server is on http://localhost:${port}`)
})