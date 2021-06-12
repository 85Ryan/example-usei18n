import React from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'react-intl'
import { LocalizedLink } from 'gatsby-plugin-usei18n'
import Layout from '../components/layout'
import Seo from '../components/seo'

export default function Home({ data, pageContext }) {
  const intl = useIntl()
  return (
    <Layout pageContext={pageContext}>
      <Seo title={intl.formatMessage({ id: 'home' })} />
      <h1>{intl.formatMessage({ id: 'hello' })}</h1>
      <p>{intl.formatMessage({ id: 'indexNote' })}</p>
      <h2>{intl.formatMessage({ id: 'pageList' })}</h2>
      <ul>
        <li>
          <LocalizedLink to="/page-2">{intl.formatMessage({ id: 'secondPageLink' })}</LocalizedLink>
        </li>
        <li>
          <LocalizedLink to="/page-3">{intl.formatMessage({ id: 'thirdPageLink' })}</LocalizedLink>
        </li>
      </ul>
      <h3>{intl.formatMessage({ id: 'clientPage' })}</h3>
      <p>
        <LocalizedLink to="/app/ryan">{intl.formatMessage({ id: 'clientPageLink' })}</LocalizedLink>
      </p>
      <h2>{intl.formatMessage({ id: 'postList' })}</h2>
      <ul>
        {data.allFile.nodes.map(({ childMdx: node }) => (
          <li key={node.frontmatter.slug}>
            <LocalizedLink to={node.frontmatter.slug}>{node.frontmatter.title}</LocalizedLink>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query ($locale: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "posts" }
        childMdx: { fields: { locale: { eq: $locale } } }
      }
    ) {
      nodes {
        childMdx {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`
