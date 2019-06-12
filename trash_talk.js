// include character.json
const character = require('./character.json').results

//setting handlebars helper for input radio checked or not
const Handlebars = require('handlebars')
Handlebars.registerHelper('ifEquals', (value1, value2) => (value1 === value2) ? 'checked' : '')

// trash talk's phrase array
const phrase = ['很簡單','很容易','很快','很正常']

// random number
function randomIndex(arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

// generate trash talk sentences
function trashTalk(option) {

  if (!option.job) return '誰都還沒選呢!'

  for (let value of character) {
    if (option.job === value.job_en) {
      return `身為一個${value.job},${randomIndex(value.trash)}應該${randomIndex(phrase)}!` 
    }
  }
}

// export trashTalk function
module.exports = trashTalk