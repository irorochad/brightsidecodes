import React from 'react';

export default function ContactUs() {
  const clickSubmitFormButton = () => {
    alert('you just submitted a form');
    // make sure to use formInk to get this done right!
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16  mx-auto max-w-screen-sm">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a thing? Need details about
          Business plan? Send that Message!
        </p>
        <form className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Name*
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none focus:outline-none focus:border-transparent"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email*
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none focus:outline-none focus:border-transparent"
              placeholder="name@domain.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  shadow-sm  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light outline-none focus:outline-none focus:border-transparent"
              placeholder="Let us know how we can help you"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message*
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none focus:outline-none focus:border-transparent"
              placeholder="Leave a comment..."
            />
          </div>
          <button
            type="button"
            onClick={clickSubmitFormButton}
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit focus:ring-4 focus:outline-none bg-blue-600 hover:p-5"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
