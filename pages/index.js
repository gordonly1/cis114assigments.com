import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout
      title={'CIS 114 Homework Page - Hasan Sefa Ozalp'}
      description={
        'This is the Homework 1 of CIS 114 - JavaScript / Ajax Programming at CSM.'
      }
    >
      <div className="mt-20 text-center">
        <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">
          CIS 114 - Homework Page
        </h2>
        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Homework 1
        </p>
        <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
          Navigation can be found at the top of the page.
        </p>
      </div>
    </Layout>
  )
}
