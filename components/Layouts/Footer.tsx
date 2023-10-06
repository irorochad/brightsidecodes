import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="mt-20 bg-white dark:bg-gray-900">
      <div className="mx-auto w-full container p-4 sm:p-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex  -ml-10">
              <Image
                src="/bsc.svg"
                width={0}
                height={0}
                priority
                alt="Bright Side Logo"
                className="w-48"
              />
            </Link>
            <p className="text-gray-600 dark:text-bsc-dark-100 font-medium">
              Bytes of Wisdom, One Click Away.
            </p>
          </div>
          <div className="mt-10 md:mt-0 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                BSC
              </h2>
              <ul className="text-gray-600 dark:text-bsc-dark-100 font-medium">
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Social
              </h2>
              <ul className="text-gray-600 dark:text-bsc-dark-100 font-medium">
                <li className="mb-4">
                  <Link
                    target="_blank"
                    href="https://twitter.com/iroro_chad"
                    className="hover:underline "
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/irorochadere/"
                    className="hover:underline"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-600 dark:text-bsc-dark-100 font-medium">
                <li className="mb-4">
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/tos" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-sm text-gray-500 text-center dark:text-bsc-dark-100">
          © 2023{' '}
          <Link href="/" className="hover:underline">
            Bright Side Codes
          </Link>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
