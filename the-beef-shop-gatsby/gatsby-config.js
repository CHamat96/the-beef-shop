/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path:`.env.${process.env.NODE_ENV}`
})

module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve:`gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    `gatsby-plugin-sharp`,
    {
      resolve:`gatsby-source-sanity`,
      options: {
        projectId:`t6u601rw`,
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN
      }
    }
  ],
}
