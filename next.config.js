const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')
const withImages = require('next-images')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withImages(withFonts(withSass({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  },

  assetPrefix: isProd ? 'https://games.nbt-team.me' : ''
})))
