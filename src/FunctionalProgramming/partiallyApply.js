export const MyButton = ({ size, color, text, ...props }) => (
  <button style={{ padding: size === 'large' ? 32 : 12, fontSize: size === 'large' ? 32 : 12, backgroundColor: color }}>
    {text}
  </button>
)

export const partiallyApply = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />
  }
}

export const DangerButtonP = partiallyApply(MyButton, { color: 'orange' })
export const BigSuccessP = partiallyApply(MyButton, { color: 'green', size: 'large' })
