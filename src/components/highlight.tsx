type HighlightProps = React.HTMLAttributes<HTMLSpanElement> & {}

export const Highlight: React.FC<HighlightProps> = ({ children }) => (
  <span className={'text-floatplane'}>{children}</span>
)
