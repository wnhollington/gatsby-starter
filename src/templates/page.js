import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

// Components
import Layout from '../components/layout'

// Render
const Page = ({ data }) => {
  const title = data.mdx.frontmatter.title
  const lastmod = data.mdx.frontmatter.lastmod
  const body = data.mdx.body

  return (
    <Layout>
      {title === 'Disclaimer' || title === 'Privacy Policy' ? <><h1>{title}</h1> <p>Last Modified: {lastmod}</p></> : null}
      <div className="max-w-screen-lg mx-auto">
              <MDXRenderer>
            {body}
        </MDXRenderer>
      </div>

    </Layout>
  )
}
export default Page

// Graphql call
export const query = graphql`
  query page($id: String) {
    mdx(id: {eq: $id}) {
        frontmatter {
            title
            lastmod(formatString: "MMMM D, YYYY")
        }
        body
    }
  }
`

