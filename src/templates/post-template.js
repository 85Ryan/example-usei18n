import * as React from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'react-intl'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogTemplate = ({ data, pageContext }) => {
  const intl = useIntl()
  return (
    <Layout pageContext={pageContext}>
      {data.mdx ? (
        <>
          <Seo title={data.mdx.frontmatter.title} />
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </>
      ) : (
        <div>
          <p>{intl.formatMessage({ id: 'transNote' })}</p>
        </div>
      )}
      <h1>Context</h1>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query ($locale: String!, $slug: String!) {
    mdx(fields: { locale: { eq: $locale } }, frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
      }
      body
    }
  }
`
