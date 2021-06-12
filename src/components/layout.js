import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MdxLink, LocalizedLink, LocaleContext, LangSelector } from 'gatsby-plugin-usei18n'
import { useIntl } from 'react-intl'

const components = {
  a: MdxLink
}

const Layout = ({ children, pageContext }) => {
  const intl = useIntl()
  const { handleLanguage } = React.useContext(LocaleContext)
  const path = pageContext.originalPath
  return (
    <React.Fragment>
      <header>
        <LocalizedLink to="/">{intl.formatMessage({ id: 'home' })}</LocalizedLink>
        <LangSelector className="langselector" path={path} toggleLanguage={handleLanguage} />
      </header>
      <main>
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
    </React.Fragment>
  )
}

export default Layout
