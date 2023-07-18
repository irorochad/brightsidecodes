import React, { useEffect, useState } from 'react';
import { MeiliSearch } from 'meilisearch';
import { useDebounce } from 'react-use';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { createClient } from '../../lib/prismic';
import SearchBoxResults from './SearchBoxResults';

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
          excerpt: post.data.excerpt,
          tags: [post.tags],
          image: post.data.cover_image?.url || '', // Extract the URL of the cover_image or use an empty string if it doesn't exist
          url: post.url || '',
          date: post.first_publication_date,
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
    }
  }, [blogContent]);

  // debounced keyword
  const [debouncedKeyword, setDebouncedKeyword] = useState('');

  // search value
  const [keyword, setKeyword] = useState('');

  // debounce hook
  const [isReady] = useDebounce(
    () => {
      setDebouncedKeyword(keyword);
      client
        .index('posts')
        .search(debouncedKeyword)
        .then((res) => {
          setIsSearching(false);
          setSearchResults(res.hits);
        });
    },
    1000,
    [keyword] // eslint-disable-line
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearching(true);
    const inputValue = e.target.value.trim();
    setKeyword(inputValue);
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
        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 dark:bg-slate-600 focus:none"
      />
      {/* if the user is typing, show a loading state */}
      {searching && (
        <div className="w-full overflow-y-auto absolute left-0 z-50 ">
          <Skeleton />
          <Skeleton count={5} />
        </div>
      )}
      {/* if the user stops typing, fetch and display the results. */}
      {!searching && isReady() && Boolean(debouncedKeyword.trim()) && (
        <SearchBoxResults searchResults={searchResults} />
      )}
    </div>
  );
}
export default SearchBox;
