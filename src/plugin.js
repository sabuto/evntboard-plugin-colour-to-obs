const toHex = require('colornames')

class TrelloPlugin {

  constructor(options, { evntBus, logger }) {
    // plugin options

    // default field
    this.evntBus = evntBus
    this.logger = logger
  }

  async load() {
    // Just Load the plugin
    this.evntBus?.newEvent('colour-plugin-load')
  }

  async unload() {
    this.evntBus?.newEvent('colour-plugin-unload')
  }

  async reload() {
    await this.unload();
    await this.load();
  }

  async convert(colourName) {
    this.evntBus?.newEvent('colour-convert', {
      data: {
        colour: toHex(colourName)
      }
    })
  }
}

module.exports = TrelloPlugin
