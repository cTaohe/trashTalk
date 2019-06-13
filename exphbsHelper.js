//setting handlebars helper for input radio checked or not
const Handlebars = require('handlebars')
Handlebars.registerHelper('ifEquals', (value1, value2) => (value1 === value2) ? 'checked' : '')