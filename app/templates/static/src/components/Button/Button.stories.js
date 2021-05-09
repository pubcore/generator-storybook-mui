import React from 'react'

import { action } from '@storybook/addon-actions'

import Button from './Button'

export default {
  title: 'Styled Button',
}

export const Default = () => (
  <Button onClick={action('Styled button clicked')}>Styled Button</Button>
)
