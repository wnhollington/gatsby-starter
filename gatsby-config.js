module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss", 
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "123" // Update
      }
    }, 
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
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
  ]
};