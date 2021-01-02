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
        spaceId: "7h9sgz6l1g95",
        accessToken: "z2YAonZNZCh8F0HxfeTKZyMfJ10twBsu5t3--6vSGQw",

      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          host : "cdn.contentful.com",
          environment : "master",
          downloadLocal : false,
          forceFullSync : false,
          pageLimit : 100,
          useNameForId : true,
        
        },
      },
    },
  ],
};
