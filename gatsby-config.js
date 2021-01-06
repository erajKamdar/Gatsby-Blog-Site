require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,

      },
    },
    // {
    //   resolve: "gatsby-plugin-firebase",
    //   options: {
    //     credentials: {
    //       apiKey: process.env.API_KEY,
    //       authDomain: process.env.AUTH_DOMAIN,
    //       host : "cdn.contentful.com",
    //       environment : "master",
    //       downloadLocal : false,
    //       forceFullSync : false,
    //       pageLimit : 100,
    //       useNameForId : true,
        
    //     },
    //   },
    // },
  ],
};
