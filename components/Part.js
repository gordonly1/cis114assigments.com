const Part = ({ children, header }) => {
  return (
    <div>
      <p className="mt-10 mb-3 text-lg font-medium leading-6 text-gray-900">
        {header}
      </p>
      {children}
    </div>
  )
}

export default Part
