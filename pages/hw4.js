import Layout from '../components/Layout'
import Part1 from '../components/Homeworks/Homework4/Part1'
import Part2 from '../components/Homeworks/Homework4/Part2'
import ExtraCredit from '../components/Homeworks/Homework4/ExtraCredit'

export default function Home() {
  return (
    <Layout
      title="Homework 4"
      description="This is the Homework 4 of CIS 114 - JavaScript / Ajax Programming at CSM."
    >
      <h1 className="text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
        Homework 4
      </h1>
      <Part1 />
      <Part2 />
      <ExtraCredit />
    </Layout>
  )
}
