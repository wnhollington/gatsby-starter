import * as React from 'react'
import { Link } from 'gatsby'

// Constants
const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "font-medium tracking-wide text-indigo-700 transition-colors duration-200 hover:text-indigo-400" } : {className: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-indigo-400"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

// Render
const Nav = () => {
  return (
    <ul className="flex items-center hidden space-x-8 lg:flex">
      <li>
        <ExactNavLink
          to="/about"
          aria-label="About"
          title="About"
        >
          About
        </ExactNavLink>
      </li>
      <li>
        <ExactNavLink
          to="/blog"
          aria-label="Blog"
          title="Blog"
        >
          Blog
        </ExactNavLink>
      </li>
      <li>
        <ExactNavLink
          to="/contact"
          aria-label="Contact"
          title="Contact"
        >
          Contact
        </ExactNavLink>
      </li>
    </ul>
  )
}

export default Nav