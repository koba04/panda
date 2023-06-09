import type { Config } from '@pandacss/types'
import { breakpoints } from './breakpoints'
import { colors } from './colors/core'
import { semanticColors } from './colors/semantic'
import { radii } from './radii'
import { semanticShadows } from './shadows'
import { spacing } from './spacing'
import { fontWeights, fonts, lineHeights } from './typography'

const defineConfig = <T extends Config>(config: T) => config

export const preset = defineConfig({
  theme: {
    breakpoints: breakpoints,
    tokens: {
      colors: colors,
      radii: radii,
      fontWeights: fontWeights,
      lineHeights: lineHeights,
      fonts: fonts,
      spacing: spacing,
    },
    semanticTokens: {
      colors: semanticColors,
      shadows: semanticShadows,
    },
  },
})

export default preset
