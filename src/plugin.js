const toHex = require('colornames')

class ColourPlugin {

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
    const hex = toHex(colourName)
    const rgb = await this.convertToRgb(hex)
    const int = await this.rgbPoint(rgb[0], rgb[1], rgb[2])

    return int
  }

  async convertToRgb(hex) {
    let chunks = [];
      let tmp, i;
      hex = hex.substr(1); // remove the pound 
      if (hex.length === 3) {
        tmp = hex.split("");
        for (i = 0; i < 3; i++) {
          chunks.push(parseInt(tmp[i] + "" + tmp[i], 16));
        }
      } else if (hex.length === 6) {
        tmp = hex.match(/.{2}/g);
        for (i = 0; i < 3; i++) {
          chunks.push(parseInt(tmp[i], 16));
        }
      } else {
        throw new Error("'" + hexa + "' is not a valid hex format");
      }
      return chunks;
    }

    async rgbPoint(red, green, blue) {
      let r = red & 0xFF;
      let g = green & 0xFF;
      let b = blue & 0xFF;
      const rgb = (red) + (green << 8) + (blue << 16);
      return rgb
    }
}

module.exports = ColourPlugin
