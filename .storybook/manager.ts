import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

const theme = create({
  base: 'light',
  brandTitle:
    '<img src="./dash-logo.svg" alt="Dash UI Components" style="height:64px;width:auto;display:block;" />',
  brandImage: null,
  brandUrl: 'https://github.com/edgar-treischl/dash-master',
})

addons.setConfig({
  theme,
})
