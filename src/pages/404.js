import React from 'react'
import { useIntl } from 'react-intl'
import Layout from '../components/layout'
import Seo from '../components/seo'

export default function Home({ pageContext }) {
  const intl = useIntl()
  return (
    <Layout pageContext={pageContext}>
      <Seo title={intl.formatMessage({ id: 'notFound' })} />
      <h1>{intl.formatMessage({ id: 'notFound' })}</h1>
    </Layout>
  )
}
