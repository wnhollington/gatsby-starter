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
  const description = data.mdx.frontmatter.description
  const img = data.mdx.frontmatter.img
  const body = data.mdx.body
  const timeToRead = data.mdx.timeToRead
  const { previous, next } = pageContext

  return (
    <Layout>
        <header className="px-4 py-10 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 ">
            <div className="mx-auto sm:text-center lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
                        {title}
                    </h2>
                    <ul className='flex flex-row space-x-4 justify-center'>
                        <li className='text-sm text-gray-600'>{lastmod}</li>
                        <li className='text-sm text-gray-600'>{timeToRead} minutes</li>
                    </ul>
                </div>
                <div className="mb-4 transition-shadow duration-300 lg:mb-6">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                        src={img}
                        alt={title}
                    />
                </div>
                <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
                {description}
                </p>
            </div>
        </header>

        <article className=''>
            <MDXRenderer>
            {body}
            </MDXRenderer>
        </article>

        <nav className='flex justify-around mx-4 my-6'>
 
            <Link 
                to={previous ? `/blog/${previous.frontmatter.slug}`: null} 
                className={`inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${previous ? null :'cursor-not-allowed'}`}
                aria-label={previous ? `${previous.frontmatter.title}` : 'There are no prior articles.'}
                title={previous ? `${previous.frontmatter.title}` : 'There are no prior articles.'}
            >
                <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                Previous
            </Link>

            <Link 
                to={next ? `/blog/${next.frontmatter.slug}` : null}  
                className={`inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${next ? null : 'cursor-not-allowed'}`}
                aria-label={next ? `${next.frontmatter.title}` : 'You are all caught up! No new articles.'}
                title={next ? `${next.frontmatter.title}` : 'You are all caught up! No new articles.'}
            >
            Next
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
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
            img
        }
        body
        timeToRead
    }
  }
`

