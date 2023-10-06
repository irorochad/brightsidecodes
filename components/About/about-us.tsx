import React from 'react';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <>
      <div className="relative overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative pb-8 bg-white dark:bg-gray-900 shadow-2xl sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 py-5">
            <svg
              className="hidden xl:block z-10 absolute right-0 inset-y-0  h-full w-48 text-white dark:text-gray-900  transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="pt-1" />

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className=":text-left text-blog-text-light dark:text-blog-text-dark max-w-md">
                <h2 className="my-6 text-2xl tracking-tight font-extrabold  sm:text-3xl md:text-4xl">
                  About
                </h2>

                <p className="">
                  I don&apos;t know what should be here, but this is an about page. what
                  do you really want to find, about me? 😒
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/bsc-about.svg"
            alt=""
            width={90}
            height={90}
          />
        </div>
      </div>
      ;
    </>
  );
}
