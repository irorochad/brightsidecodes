import React, { useEffect, useState } from 'react';
import { MeiliSearch } from 'meilisearch';
import _ from 'lodash';
import { createClient } from '../../lib/prismic';

function SearchBox() {
  const client = new MeiliSearch({
    host: 'http://localhost:7700',
    apiKey: 'a5bD8E3fGhIjK9L1',
  });

  const [blogContent, setBlogContent] = useState([]);
  const [searching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const PrismicClient = createClient();
        const response = await PrismicClient.getAllByType('post', {
          fetchLinks: ['author.name', 'author.picture'],
          orderings: [{ field: 'my.post.date', direction: 'desc' }],
        });

        // Convert the Prismic response to the desired format for MeiliSearch
        const allPosts = response.map((post) => ({
          id: post.id,
          title: post.data.title[0]?.text || '', // Extract the first text value of the title or use an empty string if it doesn't exist
          overview: post.data.excerpt,
          genres: [], // Replace this with the actual genres field from your Prismic data
          poster: post.data.cover_image?.url || '', // Extract the URL of the cover_image or use an empty string if it doesn't exist
          release_date: post.first_publication_date,
          // Add any other necessary fields here...
        }));

        setBlogContent(allPosts);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (blogContent.length > 0) {
      // Data is fetched and state is updated, now you can send it to MeiliSearch

      client.index('posts').addDocuments(blogContent);
      // .then((res) => console.log(res));
    }
  }, [blogContent]);

  // Debounce the search function to avoid frequent API calls while the user is typing
  const debouncedSearch = _.debounce((query) => {
    client
      .index('posts')
      .search(query)
      .then((res) => {
        setIsSearching(false);
        setSearchResults(res.hits);
      });
  }, 1000);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    debouncedSearch(inputValue);
    setIsSearching(true);
  };

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="search"
        id="search-bar-input"
        placeholder="Search"
        onChange={handleChange}
        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
      />
      {searching && <div>Loading...</div>}
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default SearchBox;
