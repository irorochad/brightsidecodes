import React, { Suspense } from 'react';
import Meta from './meta';
import Footer from './Layouts/Footer';
import Navbar from './Layouts/Navbar';
import AnalyticsTags from './Analytics-Tags';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Meta />
      <Suspense>
        <AnalyticsTags />
      </Suspense>

      <Navbar />
      {/* since the navbar is fixed, it's taken out of the page, any content under it
      will move behind it, to control that, we add a PT to the children/content below! */}
      <main className="pt-16 ">{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
