const character = require('./character.json')
const Handlebars = require('handlebars')

Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this)
})

const phrase = ['很簡單','很容易','很快','很正常']

function randomIndex(arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function trashTalk(option) {
  let collection = ''
  let selectedJob = ''
  let trashWord = ''

  if (!option.job) return collection = '誰甚麼都沒選呢!'

  if (option.job === 'engineer') {
    selectedJob = '工程師'
    trashWord = `${randomIndex(character.results[0].trash)}${randomIndex(phrase)}`
  }
  if (option.job === 'designer') {
    selectedJob = '設計師'
    trashWord = `${randomIndex(character.results[1].trash)}${randomIndex(phrase)}`
  }
  if (option.job === 'entrepreneur') {
    selectedJob = '創業家'
    trashWord = `${randomIndex(character.results[2].trash)}${randomIndex(phrase)}`
  }
 
  // collection = `身為一個${selectedJob}，${trashWord}`
  return collection  = `身為一個${selectedJob}，${trashWord}`
}

module.exports = trashTalk