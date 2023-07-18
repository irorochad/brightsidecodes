import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MeiliSearch } from 'meilisearch';
import { useDebounce } from 'react-use';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { createClient } from '../../lib/prismic';
import SearchBoxResults from './SearchBoxResults';

function SearchBox() {
  const { asPath } = useRouter();

  const client = new MeiliSearch({
    // host: 'http://localhost:7700',
    // apiKey: 'a5bD8E3fGhIjK9L1',
    host: 'https://ms-27424e841c3e-3448.sfo.meilisearch.io',
    apiKey: 'ae5e81f961ec1881a96c016834142dcb86f05dcd',
  });

  const [blogContent, setBlogContent] = useState([]);
  const [searching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

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
          setShowResults(true); // set the showResult to be true
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

  // useEffect to close the search results when results are clicked.
  useEffect(() => {
    setShowResults(false);
  }, [asPath]);

  return (
    <div className="relative">
      <AiOutlineSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
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
        <div>
          {/* when the show searchResult is true, show this. */}
          {/* When the page mounts it's set to false so this SearchResults won't be shown */}
          {showResults && <SearchBoxResults searchResults={searchResults} />}
        </div>
      )}
    </div>
  );
}
export default SearchBox;
