import * as React from 'react'

// Components

const Nav = () => {
  return (
    <ul className="flex items-center hidden space-x-8 lg:flex">
      <li>
        <a
          href="/"
          aria-label="Our product"
          title="Our product"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
        >
          Product
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Our product"
          title="Our product"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
        >
          Features
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Product pricing"
          title="Product pricing"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
        >
          Pricing
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="About us"
          title="About us"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
        >
          About us
        </a>
      </li>
    </ul>
  )
}

export default Nav