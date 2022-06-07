require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
    contact: {
      phone: `303-799-9983`,
      email: `neal.hollington@hallboothsmith.com`
    }
  },
  plugins: [
    "gatsby-plugin-postcss", 
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "UA-111111111-1" // Update
      }
    }, 
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sitemap", 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Gatsby Site`,
        start_url: `/`,
        background_color: `#f8f6f3`,
        theme_color: `#2a4234`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    "gatsby-plugin-mdx", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "articles",
        "path": "./.frontmatter/content/articles"
      },
      __key: "articles"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "mdx-pages",
        "path": "./.frontmatter/content/pages"
      },
      __key: "mdx-pages"
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries")
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx} }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  title: edge.node.frontmatter.title,
                  description: edge.node.frontmatter.description,
                  url: `${site.siteMetadata.siteUrl}/blog/${edge.node.frontmatter.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog/${edge.node.frontmatter.slug}`,
                })
              })
            },
            query: `
              {
                allMdx(filter: {frontmatter: {type: {eq: "article"}}}){
                  edges {
                    node {
                      frontmatter {
                        title
                        slug
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "RSS Feed",
          },
        ],
      },
    },
  ]
};