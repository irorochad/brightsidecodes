import Link from 'next/link';

type SearchBoxResultsProps = {
  searchResults: any;
};
function SearchBoxResults({ searchResults }: SearchBoxResultsProps) {
  return (
    <div
      className="w-full rounded-2xl max-h-300 md:max-h-96
       overflow-y-auto   absolute  left-0 z-50 "
    >
      {searchResults.length ? (
        <div className="pt-12 bg-secondBg dark:bg-slate-800 dark:text-blog-text-dark">
          <h1 className="dark:text-darkPri text-center">Search Result</h1>
          <div>
            {searchResults.map((result) => (
              <div
                key={result.id}
                className="bg-secondBg dark:bg-slate-800 dark:text-blog-text-dark"
              >
                <div className="">
                  <Link href={`${result.url}`}>
                    <div className="flex items-center gap-x-6 p-3 mb-3">
                      <span className="text-lg ">{result.title}</span>
                      <span className="text-base">{result.excerpt}</span>
                    </div>
                  </Link>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="py-12  bg-secondBg dark:bg-slate-800 dark:text-blog-text-dark">
          <h1 className="dark:text-darkPri text-center">No results match your query.</h1>
        </div>
      )}
    </div>
  );
}
export default SearchBoxResults;
