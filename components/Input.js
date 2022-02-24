import classNames from 'classnames'

const Input = ({ className, innerRef, value, label, id, ...rest }) => {
  return (
    <div className={classNames(className)}>
      {label && (
        <label htmlFor={id} className={'mb-1 block text-sm text-gray-700'}>
          {label}
        </label>
      )}
      <input
        ref={innerRef}
        id={id}
        value={value}
        {...rest}
        className={`block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder-gray-500 hover:border-gray-500 focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600 sm:text-sm ${
          className ? className : ''
        }`}
      />
    </div>
  )
}

export default Input
