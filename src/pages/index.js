import * as React from 'react'
import { Link, graphql } from 'gatsby'

// Components
import Layout from '../components/layout'
import Modal from '../components/elements/modal'

const IndexPage = ({ data }) => {
  // Featured Articles
  const articles = data.allMdx.edges
  return (
    <Layout>

      {/* Hero */}
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                The quick, brown fox
                <br className="hidden md:block" />
                jumps over{' '}
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-400" />
                  <span className="relative inline-block text-indigo-400">
                    a lazy dog
                  </span>
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <Modal buttonClasses="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-400 hover:bg-indigo-700 focus:shadow-outline focus:outline-none" />
              <Link
                to="/about"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-indigo-800"
              >
                Learn More
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Featured Posts
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            See our most recent articles below.
          </p>
        </div>
        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
          {articles.map(({ node })=>{
            const title = node.frontmatter.title
            const slug = node.frontmatter.slug
            const img = node.frontmatter.img
            const description = node.frontmatter.description
            return (
              <Link
                to={`/blog/${slug}`}
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <img
                    src={img}
                    className="object-cover w-full h-48"
                    alt={title}
                  />
                  <div className="flex-grow border border-t-0 rounded-b">
                    <div className="p-5">
                      <h6 className="mb-2 font-semibold leading-5">
                        {title}
                      </h6>
                      <p className="text-sm text-gray-900">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-indigo-400 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
          >
            View All
          </Link>
        </div>
      </section>

      {/* Signup CTA */}
      <section class="bg-gray-100 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="lg:flex lg:items-center lg:justify-between">
              <h2 class="text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl">
                  Subscribe to get legal updates directly to your inbox.
              </h2>
              
              <div class="mt-8 lg:mt-0">
                  <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                      <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address"/>
                      
                      <button class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-700 rounded-md focus:ring focus:ring-indigo-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                          Get Started
                      </button>
                  </div>

                  <p class="mt-3 text-sm text-gray-500">You will not be spammed and your information will never be sold.  You can always unsubscribe.</p>
              </div>
          </div>
      </section>
    </Layout>
  )
}

export default IndexPage

// Graphql call
export const query = graphql`
  query featuredArticles {
    allMdx(
      filter: {frontmatter: {type: {eq: "article"}}}
      limit: 3
      sort: {fields: frontmatter___lastmod, order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            description
            img
          }
        }
      }
    }
  }
`