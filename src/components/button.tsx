const variants = {
  primary: '',
  secondary: 'border-4 border-floatplane',
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  leftIcon?: string
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  leftIcon,
  variant = 'primary',
  ...other
}) => {
  return (
    <button
      className={`text-btn  rounded-full bg-white px-6 py-3 text-black transition-all hover:scale-110 ${variants[variant]} ${className}}`}
      {...other}
    >
      <div className={'flex items-center'}>
        {leftIcon && (
          <img className={'-ml-2 mr-2 h-8 w-8'} src={leftIcon} alt={''} />
        )}
        {children}
      </div>
    </button>
  )
}
