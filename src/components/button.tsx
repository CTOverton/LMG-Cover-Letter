type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  leftIcon?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  leftIcon,
  ...other
}) => {
  return (
    <button
      className={`text-btn flex items-center rounded-full bg-white px-6 py-3 text-black transition-all hover:scale-110 ${className}`}
      {...other}
    >
      {leftIcon && (
        <img className={'-ml-2 mr-2 h-8 w-8'} src={leftIcon} alt={''} />
      )}
      {children}
    </button>
  )
}
