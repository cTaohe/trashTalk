// include characters and phrase form character.json
const characters = require('./character.json')
const character = characters.character

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
      return `身為一個${value.job},${randomIndex(value.trash)}應該${randomIndex(characters.phrase)}!` 
    }
  }
}

// export trashTalk function
module.exports = trashTalk