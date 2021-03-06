import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from 'gatsby-plugin-mdx'

// Components
import Layout from '../components/layout'
import ContactForm from '../components/elements/contact-form'

const shortcodes = { ContactForm }

// Render
const Page = ({ data }) => {
  const title = data.mdx.frontmatter.title
  const lastmod = data.mdx.frontmatter.lastmod
  const body = data.mdx.body

  return (
    <Layout>
      {title === 'Disclaimer' || title === 'Privacy Policy' ? <><h1>{title}</h1> <p>Last Modified: {lastmod}</p></> : null}
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
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

