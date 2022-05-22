import { Link } from "gatsby"
import { default as React } from "react"
import {
  Hits,
  Index,
} from "react-instantsearch-dom"

const PageHit = ({ hit }) => (
  <Link
    to={`/blog/${hit.slug}`}
    aria-label="View Item"
    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
  >
    <div className="flex flex-col h-full">
      <img
        src={hit.img}
        className="object-cover w-full h-48"
        alt={hit.title}
      />
      <div className="flex-grow border border-t-0 rounded-b">
        <div className="p-5">
          <h6 className="mb-2 font-semibold leading-5">
            {hit.title}
          </h6>
          <p className="text-sm text-gray-900">
            {hit.description}
          </p>
        </div>
      </div>
    </div>
  </Link>
)

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <Hits hitComponent={PageHit} />
  </Index>
)

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </div>
)

export default SearchResult

	


