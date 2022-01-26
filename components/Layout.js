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
        {children}
      </div>
      <Footer />
    </div>
  )
}


export default Layout