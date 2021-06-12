import * as React from 'react'
import { LocalizedRouter, useLocalization } from 'gatsby-plugin-usei18n'
import Name from '../components/name'

const App = ({ pageContext }) => {
  const { locale } = useLocalization()

  return (
    <LocalizedRouter basePath="/app">
      <Name pageContext={pageContext} path="/:name" locale={locale} />
    </LocalizedRouter>
  )
}

export default App
