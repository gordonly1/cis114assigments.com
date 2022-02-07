import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'


const Layout = ({ children, title, description }) => {
  return (
    <div >
      <Head>
        <title>{title}</title>
        <meta property="description" content={description} />
      </Head>
      <div className='min-h-[84vh]'>
        <Navigation />
        <main className="mt-6 mx-auto max-w-7xl px-4 sm:mt-10">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}


export default Layout