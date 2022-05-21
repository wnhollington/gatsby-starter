import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'

// Components
import Layout from '../components/layout'

// Render
const Article = ({ data, pageContext }) => {
  const title = data.mdx.frontmatter.title
  const lastmod = data.mdx.frontmatter.lastmod
  const description = data.mdx.frontmatter.author
  const author = data.mdx.frontmatter.author
  const body = data.mdx.body
  const { previous, next } = pageContext

  return (
    <Layout>
        <h1>{title}</h1>
        <p>Last Modified: {lastmod}</p>
        <p>Author: {author}</p>
        <p>Description: {description}</p>

        <MDXRenderer>
            {body}
        </MDXRenderer>

        <nav>
            <div className="previous-page">
                {previous && (
                <>
                    <h4>Previous Article</h4>
                    <Link to={`/blog/${previous.frontmatter.slug}`}>{previous.frontmatter.title}</Link>
                </>
                )}
            </div>
            <div className="next-page">
                {next && (
                <>
                    <h4>Next Article</h4>
                    <Link to={`/blog/${next.frontmatter.slug}`}>{next.frontmatter.title}</Link>
                </>
                )}
            </div>
        </nav>

    </Layout>
  )
}
export default Article

// Graphql call
export const query = graphql`
  query article($id: String) {
    mdx(id: {eq: $id}) {
        frontmatter {
            title
            slug
            lastmod(formatString: "MMMM D, YYYY")
            description
            author
        }
        body
    }
  }
`

