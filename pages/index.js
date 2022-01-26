import Layout from '../components/Layout'


export default function Home() {
  return (
    <Layout title={'CIS 114 Homework Page - Hasan Sefa Ozalp'} description={'This is Homework 1 of CIS 114.'}>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">CIS 114 - Homework Page</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Homework 1
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Navigation can be found at the top of the page.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
