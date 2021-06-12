import * as React from 'react'
import { useIntl } from 'react-intl'
import Layout from './layout'
import Seo from './seo'

const Name = ({ pageContext, name, locale }) => {
  const intl = useIntl()
  return (
    <Layout pageContext={pageContext}>
      <Seo title={name} />
      <h2>
        {intl.formatMessage({ id: 'name' })}: {name}
      </h2>
      <h2>
        {intl.formatMessage({ id: 'locale' })}: {locale}
      </h2>
    </Layout>
  )
}

export default Name
