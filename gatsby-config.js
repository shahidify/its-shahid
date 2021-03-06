module.exports = {
  siteMetadata: {
    title: "MSK",
    description: "its Shahid ",
    siteUrl: "https://www.shahidify.tech",
    author: "shahidify",
    twitter: "shahidify"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mohammed Shahid Khan`,
        short_name: `shahidify`,
        start_url: `/`,
        background_color: `#337ab7`,
        theme_color: `#00bcd4`,
        display: `fullscreen`,
        icon: `src/static/logo/favicon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-102315844-1",
        head: true
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`
  ]
};
