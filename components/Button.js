import classNames from 'classnames'

const Button = ({
  children,
  className,
  disabled,
  color,
  size,
  type,
  onClick,
  ...rest
}) => {
  const colors = {
    primary:
      'text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800',
    secondary:
      'text-primary-600 bg-transparent hover:bg-primary-50 active:bg-primary-100 ring-1 ring-primary-600',
    green: 'text-white bg-green-600 hover:bg-green-700 active:bg-green-800',
    gray: 'text-gray-800 bg-white hover:text-gray-700 active:text-gray-900',
    warning: 'text-white bg-red-600 hover:bg-red-700 active:bg-red-800',
    link: 'pr-0 pl-0 text-gray-800 hover:text-primary-600',
    primaryLink: 'pr-0 pl-0 text-primary-600 hover:text-black',
    cancel:
      'text-gray-700 hover:text-gray-900 active:text-gray-900 bg-transparent hover:bg-gray-200 active:bg-gray-300',
  }

  const sizes = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
    xl: 'py-4 px-8 text-xl',
  }

  const defaultColor = colors['primary']
  const defaultSize = sizes['md']

  return (
    <button
      {...rest}
      onClick={!disabled ? onClick : undefined}
      type={type || 'button'}
      className={classNames(
        'inline-flex items-center justify-center rounded-md font-semibold',
        sizes[size] || defaultSize,
        colors[color] || defaultColor,
        disabled && 'cursor-default opacity-50',
        className
      )}
    >
      <span className="relative">
        <span>{children}</span>
      </span>
    </button>
  )
}

export default Button
