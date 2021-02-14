import { addDecorator } from '@storybook/react'
import React from 'react'

import { StylesProvider } from '@material-ui/styles'

const StylesDecorator = (storyFn) => (
  <StylesProvider injectFirst>{storyFn()}</StylesProvider>
)

addDecorator(StylesDecorator)
