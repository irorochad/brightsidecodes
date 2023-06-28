import React from 'react'
import Meta from '../components/meta'
import Footer from '../components/Layouts/Footer'
import Navbar from '../components/Layouts/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Meta />
      <Navbar />
      {/* since the navbar is fixed, it's taken out of the page, any content under it
      will move behind it, to control that, we add a PT to the children/content below! */}
      <main className="pt-16 ">{children}</main>
      <Footer />
    </>
  )
}
export default Layout
