const config = require('./config')
const schema = require('./schema')
const plugin = require('./plugin')

module.exports = {
  id: 'colour',
  name: 'Colour to Hex',
  description: 'A way to recieve colour names and convert them so OBS can use them.',
  plugin,
  schema,
  config
}
