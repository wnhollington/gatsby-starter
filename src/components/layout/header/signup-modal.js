import * as React from 'react'

// Components

const SignupModal = () => {
  return (
    <ul className="flex items-center hidden space-x-8 lg:flex">
      <li>
        <a
          href="/"
          className="inline-flex items-center justify-center h-8 p-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
          aria-label="Sign up"
          title="Sign up"
        >
          Subscribe
        </a>
      </li>
    </ul>
  )
}

export default SignupModal