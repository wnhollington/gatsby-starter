import * as React from "react"

import Layout from "../components/layout"
import Search from "../components/search"
const searchIndices = [{ name: `Articles`, title: `Aricles` }]

const Blog = () => (
  <Layout>
    <Search indices={searchIndices} />
  </Layout>
)

export default Blog
