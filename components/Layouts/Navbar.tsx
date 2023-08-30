import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { BiMenuAltRight } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import ThemeToggler from '../ToggleTheme';
// import SearchBox from './SearchBox';

function Navbar() {
  const { asPath } = useRouter();
  const [nav, setNav] = useState(false);

  // code to make the navbar fixed when the user scroll.
  // const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 100;
  //     if (isScrolled !== scrolled) {
  //       setScrolled(isScrolled);
  //     }
  //   };
  //   document.addEventListener('scroll', handleScroll);
  //   return () => {
  //     document.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrolled]);

  // We use this useEffect to close the mobile navBar when a nav link is clicked.
  useEffect(() => {
    setNav(false);
  }, [asPath]);

  const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'About', path: '/about' },
    { id: 3, title: 'Contact', path: '/contact' },
    { id: 4, title: 'Projects', path: '/project' },
    { id: 5, title: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-10 backdrop-blur-md ">
      {/* Backdrop for mobile nav when opened */}
      {/* <button
        type="button"
        onClick={() => setNav(!nav)}
        className={`fixed navbar-backdrop h-full w-full z-40 ${
          nav ? 'flex' : 'hidden'
        }`}
      /> */}
      {/* End Backdrop */}

      <section className="w-full lg:text-sm transition-bg ease-in-out duration-500 max-w-screen-xl mx-auto">
        <div className=" items-center px-4  mx-auto lg:flex lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            <Link href="/">
              <Image
                src="/bsc.svg"
                width={120}
                height={120}
                priority
                alt="Logo"
                className="w-48 -ml-5"
              />
            </Link>
            {/* mobile toggle and harmbuger iconsI */}
            <div className="flex flex-row space-x-7 lg:hidden">
              <ThemeToggler />
              <button
                type="button"
                className="text-gray-500 dark:text-bsc-dark-100"
                onClick={() => setNav(!nav)}
              >
                {nav ? (
                  <IoMdClose className="text-4xl" />
                ) : (
                  <BiMenuAltRight className="text-4xl" />
                )}
              </button>
            </div>
          </div>
          {/* search */}
          {/* <SearchBox /> */}
          {/* nav links */}
          <div
            className={`absolute top-11  lg:static bg-white dark:bg-black lg:bg-inherit lg:dark:bg-inherit w-full h-screen lg:h-auto -ml-4 flex-1 pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 lg:-ml-0 ${
              nav ? 'block' : 'hidden'
            }`}
          >
            <ul className="w-4/5 mx-auto lg:w-full justify-end items-center py-10 lg:py-0 space-y-10 lg:flex lg:space-x-6 lg:space-y-0 ">
              {navigation.map(({ id, title, path }) => (
                <li
                  key={id}
                  className=" relative after:content-[''] after:bg-blue-500 after:h-1 after:w-[0%] after:left-0 after:-bottom-4 after:rounded-xl after:absolute after:duration-300 hover:after:w-full"
                >
                  <Link
                    href={path}
                    className="block text-sm font-semibold uppercase text-gray-700 dark:text-bsc-dark-100 hover:text-indigo-600"
                  >
                    {title}
                  </Link>
                </li>
              ))}
              <span className="hidden w-px h-6 bg-gray-300 lg:block" />
              <div className="space-y-3 items-center gap-x-6 lg:flex lg:space-y-0">
                <li className="hidden lg:block">
                  <ThemeToggler />
                </li>
                <li>
                  <Link
                    href="/"
                    className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow lg:inline"
                  >
                    Get Started/
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
