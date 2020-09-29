module.exports = {
  siteMetadata: {
    title: `Natours | Exciting tours for adventurous people`,
    description: `View and book nature tours online`,
    author: `Victoria Kastanenka`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato:300,400,700"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Natours demo`,
        short_name: `Natours`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#55c57a`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "g5twm8ub",
        dataset: "production",
        token:
          "skbwhZDQkz66oSi8BlfoTuG0jBttCQ5V5T8vSXwBNXLfk30hpQMAZXWm1PBtgU9zKCU3fiNmxTa2piMqN",
        watchMode: true,
        overlayDrafts: true,
      },
    },
  ],
}
