// import Link from 'next/link';
// import Image from 'next/image';
// import Skeleton from '@mui/material/Skeleton';

type SearchBoxResultsProps = {
  searching: boolean;
  searchResults: [];
};
function SearchBoxResults({ searching, searchResults }: SearchBoxResultsProps) {
  //   const { results, isLoading, error } = useConcurrentApiFetch(query, token);

  // Process and render data
  if (searching) {
    return (
      <div
        className="w-full bg-rb-light-200 dark:bg-rb-dark-0
      rounded-2xl p-6 mt-56 md:mt-4 absolute top-28 left-0 z-50"
      >
        <p>Loading...</p>
        {/* {Array(3)
          .fill(3)
          .map(() => (
            <Skeleton
              key={nanoid()}
              variant="rounded"
              className="bg-rb-light-900 dark:bg-rb-dark-100 my-2 h-24"
            />
          ))} */}
      </div>
    );
  }

  return <div>The user search is: ...</div>;
}
export default SearchBoxResults;
