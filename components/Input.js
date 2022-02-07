import classNames from 'classnames'


const Input = ({ className, innerRef, value, label, id, ...rest }) => {
  return (
    <div className={classNames(className)}>
      {
        label && <label htmlFor={id} className={'block text-gray-700 text-sm'}>
          {label}
        </label>
      }
      <input
        ref={innerRef}
        id={id}
        value={value}
        {...rest}
        className={`block w-full text-base px-3 py-2 rounded-md sm:text-sm bg-white placeholder-gray-500 focus:outline-none focus:ring-1 border border-gray-300 focus:border-primary-600 focus:ring-primary-600 ${className ? className : ''}`}
      />
    </div>
  )
}


export default Input