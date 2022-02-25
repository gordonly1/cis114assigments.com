const Part = ({ children, header }) => {
  return (
    <div className="mt-8 border-b pb-10">
      <p className="mb-3 text-lg font-medium leading-6 text-gray-900">
        {header}
      </p>
      {children}
    </div>
  )
}

export default Part
