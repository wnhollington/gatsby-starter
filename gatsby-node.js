const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

// Create Pages
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    // Templates
    const pageTemplate = path.resolve('./src/templates/page.js')
    const articleTemplate = path.resolve('./src/templates/article.js')

    // this graphql is function string to pass graphql query, this is a node version of graphql
    // this query returns a promise of slugs. use then instead of async await
    return graphql(`
        {
            pages: allMdx(filter: {frontmatter: {type: {eq: "page"}}}){
                edges {
                    node {
                        frontmatter {
                            title
                            slug
                        }
                        id
                    }
                }
            }
            articles: allMdx(filter: {frontmatter: {type: {eq: "article"}}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            slug
                        }
                        id
                    }
                }
            }
        }
    `, { limit: 1000}).then(result => {

        // Create Pages
        const pages = result.data.pages.edges
        pages.forEach((page) => {
            // previous and next are objects props sent as pageContect object to blogPostTemplate
            createPage({
                path: `/${page.node.frontmatter.slug}`,
                component: pageTemplate,
                context: {
                    slug: page.node.frontmatter.slug,
                    id: page.node.id
                },
            })
        })

        // Create Single Article and Pagination
        const articles = result.data.articles.edges
        articles.forEach((article, index) => {
            // Create prev and next pages
            const previous = index === articles.length - 1 ? null: articles[index + 1].node
            const next = index === 0 ? null : articles[index - 1].node
            // Previous and next are object props sent as pageContext object to articleTemplate
            createPage({
                path: `/blog/${article.node.frontmatter.slug}`,
                component: articleTemplate,
                context: {
                    slug: article.node.frontmatter.slug,
                    id: article.node.id,
                    previous,
                    next,
                },
            })
        })

  })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === `mdx`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}