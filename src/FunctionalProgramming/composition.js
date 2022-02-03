export const MyButton = ({ size, color, text, ...props }) => (
  <button style={{ padding: size === 'large' ? 32 : 12, fontSize: size === 'large' ? 32 : 12, backgroundColor: color }}>
    {text}
  </button>
)

export const DangerButton = (props) => {
  return <MyButton {...props} color='orange' />
}

export const BigSuccess = (props) => {
  return <MyButton {...props} color='green' size='large' />
}
