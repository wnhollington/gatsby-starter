import algoliasearch from "algoliasearch/lite"
import { default as React, useState, useMemo } from "react"
import { InstantSearch, connectMenu } from "react-instantsearch-dom"
import SearchResult from "./search-results"

export default function Search({ indices }) {
  const [query, setQuery] = useState()
  const [hasFocus] = useState(false)
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  )

  const MenuSelect = ({ items, currentRefinement, refine }) => (

    <section class="bg-gray-100 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="lg:flex lg:items-center lg:justify-center">
          <h2 class="text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl">
              I want to learn about
          </h2>
          <select
            value={currentRefinement || ''}
            onChange={event => refine(event.currentTarget.value)}
          >
            <option value="">Everything</option>
            {items.map(item => (
              <option
                key={item.label}
                value={item.isRefined ? currentRefinement : item.value}
              >
                {item.label}
              </option>
            ))}
          </select>
      </div>
    </section>
  );

  const CustomMenuSelect = connectMenu(MenuSelect);

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
    >
        <CustomMenuSelect attribute="category" />

        <SearchResult
          show={query && query.length > 0 && hasFocus}
          indices={indices}
        />

    </InstantSearch>
  )
}