import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full container p-4 sm:p-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/bsc.svg"
                width={0}
                height={0}
                priority
                alt="Logo"
                className="w-48 -ml-5"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-600 dark:text-bsc-dark-100 font-medium">
                <li className="mb-4">
                  <Link href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </Link>
                </li>
                <li>
                  <Link href="https://tailwindcss.com/" className="hover:underline">
                    Tailwind CSS
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-600 dark:text-bsc-dark-100 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                    Discord
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
                  <Link href="/privacy-policy" className="hover:underline">
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
