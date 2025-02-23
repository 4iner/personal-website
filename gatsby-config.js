module.exports = {
  siteMetadata: {
    title: `Mustafa Ameen`,
    description: `Personal website and portfolio showcasing my work and experience in software development.`,
    author: `@4iner`,
    siteUrl: `https://mufasa.ca/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `Mustafa Ameen - Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#1a1a1a`,
        theme_color: `#8A2BE2`,
        display: `minimal-ui`,
        icon: `static/favicon.svg`,
        icon_options: {
          purpose: `any maskable`,
        },
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "mameen-personal-website",
      },
    },
  ],
}
