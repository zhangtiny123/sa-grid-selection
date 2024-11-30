'use strict'

import ICONS from '@symbo.ls/default-icons'
import europaRegular from './fonts/europa-regular-webfont.woff2'
import europaBold from './fonts/europa-bold-webfont.woff2'

/**
 * Colors
 * @tutorial https://docs.symbols.app/color
 */
const COLOR = {
  transparent: 'transparent',
  black: 'black',
  white: 'white',
  orange: '#E98232',
  gray: 'rgba(0, 0, 0, 0.5)',
  cellActive: '#3D7BD9',
  cellInactive: '#E8F1FF'
}

/**
 * Gradients
 * @tutorial https://docs.symbols.app/color
 */
const GRADIENT = {}

/**
 * Themes
 * @tutorial https://docs.symbols.app/theme
 */
const THEME = {
  document: {
    '@dark': {
      color: 'white',
      background: 'black'
    },
    '@light': {
      background: 'white',
      color: 'black'
    },
    '@midnight': {
      background: '#112233',
      color: 'white'
    }
  }
}

/**
 * Fonts
 * @tutorial https://docs.symbols.app/font
 */
const FONT = {
  Europa: [{
    url: europaRegular,
    fontWeight: 400,
    fontStyle: 'normal',
    fontDisplay: 'swap'
  }, {
    url: europaBold,
    fontWeight: 700,
    fontStyle: 'normal',
    fontDisplay: 'swap'
  }]
}

/**
 * Font families
 * @tutorial https://docs.symbols.app/font
 */
const FONT_FAMILY = {
  EuropaFonts: {
    isDefault: true,
    value: ['Europa'],
    type: 'sans-serif'
  }
}

/**
 * Typography
 * @tutorial https://docs.symbols.app/typography
 * @tutorial https://docs.symbols.app/sequence
 */
const TYPOGRAPHY = {
  base: 16,
  ratio: 1.2
}

/**
 * Spacing
 * @tutorial https://docs.symbols.app/spacing
 * @tutorial https://docs.symbols.app/sequence
 */
const SPACING = {}

const options = {
  verbose: false,
  useReset: true,
  useDocumentTheme: true,
  useFontImport: true,
  useVariable: true,
  useSvgSprite: true,
  useIconSprite: true
}

export default {
  ...options,
  COLOR,
  GRADIENT,
  THEME,
  ICONS,
  TYPOGRAPHY,
  SPACING,
  FONT,
  FONT_FAMILY
}
