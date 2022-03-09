import Layout from '../components/Layout'
import Part1 from '../components/Homeworks/Homework2/Part1'
import Part2 from '../components/Homeworks/Homework2/Part2'
import Bonus from '../components/Homeworks/Homework2/Bonus'

export default function Home() {
  return (
    <Layout
      title="Homework 2"
      description="This is the Homework 2 of CIS 114 - JavaScript / Ajax Programming at CSM."
    >
      <h1 className="text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
        Homework 2
      </h1>
      <Part1 />
      <Part2 />
      <Bonus />
    </Layout>
  )
}
