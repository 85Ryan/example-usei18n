import * as React from 'react'
import { LocalizedLink } from 'gatsby-plugin-usei18n'
import { useIntl } from 'react-intl'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Page3 = ({ pageContext }) => {
  const intl = useIntl()
  return (
    <Layout pageContext={pageContext}>
      <Seo title={intl.formatMessage({ id: 'thirdPage' })} />
      <h1>{intl.formatMessage({ id: 'thirdPage' })}</h1>
      <p>{intl.formatMessage({ id: 'thirdNote' })}</p>
      <p>
        <LocalizedLink to="/page-2/">{intl.formatMessage({ id: 'secondPageLink' })}</LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/">{intl.formatMessage({ id: 'indexPageLink' })}</LocalizedLink>
      </p>
    </Layout>
  )
}

export default Page3
