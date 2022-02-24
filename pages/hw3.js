import Layout from '../components/Layout'
import ComingSoon from '../components/ComingSoon'
import Part1 from '../components/Homeworks/Homework3/Part1'

export default function Home() {
  return (
    <Layout
      title="Homework 3"
      description="This is the Homework 3 of CIS 114 - JavaScript / Ajax Programming at CSM."
    >
      <h2 className="text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
        Homework 3
      </h2>
      <Part1 />
    </Layout>
  )
}
