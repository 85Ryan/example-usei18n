module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://example-usei18n.netlify.app`,
    title: 'example-usei18n',
    description: `Default example for gatsby-plugin-usei18n`,
    author: `Ryan`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/posts/`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] }
    },
    {
      resolve: `gatsby-plugin-usei18n`,
      options: {
        defaultLang: `en`,
        configPath: require.resolve(`./i18n/config.json`),
        redirect: true,
        prefixDefault: false
      }
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `Yaml` // a fixed string
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`)
        }
      }
    }
  ]
}
