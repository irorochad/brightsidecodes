/* eslint-disable */

import { NextPage } from 'next';
import Link from 'next/link';

const ErrorPage: NextPage<{ statusCode: number }> = ({ statusCode }) => {
  let message = 'An error occurred';
  let subText = '';

  // Handle specific error codes
  if (statusCode === 404) {
    message = 'Page not found';
    subText = 'The page has either moved or does not exist.';
  } else if (statusCode === 500) {
    message = 'Internal server error';
    subText = "We're sorry about this, please try again later.";
  } else if (statusCode === 403) {
    message = 'Forbidden';
    subText = 'You do not have permission to access this resource.';
  } else if (statusCode === 400) {
    message = 'Bad Request';
    subText = 'The request was invalid or cannot be processed.';
  } else if (statusCode === 401) {
    message = 'Unauthorized';
    subText = 'Authentication is required to access this resource.';
  } else if (statusCode === 503) {
    message = 'Service Unavailable';
    subText = 'The server is temporarily unable to handle the request.';
  } else if (statusCode === 405) {
    message = 'Method Not Allowed';
    subText = 'The requested HTTP method is not supported for this resource.';
  } else if (statusCode === 502) {
    message = 'Bad Gateway';
    subText = 'The server received an invalid response from an upstream server.';
  }

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-indigo-600 to-blue-400">
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-blue-600 text-9xl">{statusCode}</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">Oops!</span> {message}
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">{subText}</p>

          {statusCode === 404 && (
            <Link
              href="/"
              className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
            >
              Go home
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  let statusCode = 404; // Default to 404

  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  }

  return { statusCode };
};

export default ErrorPage;
