module.exports = {
  siteMetadata: {
    title: `Kyle`,
    description: `Kyle Melton fullstack javascript developer working with React, Typescript, and all other sorts.`,
    author: `@kalm42`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kyle-melton-developer`,
        short_name: `Kyle`,
        start_url: `/`,
        background_color: `#021E73`,
        theme_color: `#021E73`,
        display: `minimal-ui`,
        icon: `src/images/kyle-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
