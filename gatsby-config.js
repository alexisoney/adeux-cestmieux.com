require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1584364,
        sv: 6,
      },
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: process.env.STORYBLOK_API_KEY,
        version: process.env.STORYBLOK_VERSION,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-5MP7DVR',
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `36986222`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          'gatsby-remark-component',
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-remove-serviceworker',
  ],
};
