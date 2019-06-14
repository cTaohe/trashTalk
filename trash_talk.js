// include characters and phrase form character.json
const characters = require('./character.json')

// random number
function randomIndex(arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

// generate trash talk sentences
function trashTalk(job) {
  const man = characters.character.find( person => person.job_en === job)

  if (job) return `身為一個${man.job},${randomIndex(man.trash)}應該${randomIndex(characters.phrase)}!` 

  return '誰都還沒選呢!'  
}

// export trashTalk function
module.exports = trashTalk