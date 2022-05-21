import * as React from 'react'

// Components

const Logo = () => {
  return (
    <a
        href="/"
        aria-label="Company"
        title="Company"
        className="inline-flex items-center"
    >
        <svg
        className="w-8 text-purple-400"
        viewBox="0 0 24 24"
        strokeLinejoin="round"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        stroke="currentColor"
        fill="none"
        >
        <rect x="3" y="1" width="7" height="12" />
        <rect x="3" y="17" width="7" height="6" />
        <rect x="14" y="1" width="7" height="6" />
        <rect x="14" y="11" width="7" height="12" />
        </svg>
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
        Company
        </span>
    </a>
  )
}

export default Logo