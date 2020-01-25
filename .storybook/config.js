import { configure } from '@storybook/react'

const req = require.context('../src/', true, /\.story.js$/)

function loadStories() {
  req.keys().forEach(f => req(f))
}

configure(loadStories, module)
