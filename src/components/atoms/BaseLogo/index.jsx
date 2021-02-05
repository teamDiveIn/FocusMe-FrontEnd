import * as B from 'src/components'

export const BaseLogo = () => {
  return (
    <B.Box display="flex" align="center">
      <img src="/images/logo.png" alt="logo" width="32" />
      <B.BaseText bold size={16}>
        DIVE IN
      </B.BaseText>
    </B.Box>
  )
}
