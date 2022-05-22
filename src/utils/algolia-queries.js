const indexName = `Articles`

const pageQuery = `{
  articles: allMdx(filter: {frontmatter: {type: {eq: "article"}}}){
    edges {
      node {
        frontmatter {
          title
          slug
          lastmod(formatString: "MMMM D, YYYY")
          description
          img
        }
        id
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, frontmatter, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...rest
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.articles.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: {
    },
  },
]

module.exports = queries