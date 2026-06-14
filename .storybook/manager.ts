import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

const theme = create({
  base: 'light',
  brandTitle:
    '<img src="./dash-logo.svg" alt="Dash UI Components" style="height:64px;width:auto;display:block;" />',
  brandImage: null,
  brandUrl: 'https://edgar-treischl.github.io/dash-storybook/?path=/',
})

addons.setConfig({
  theme,
})
