import { Divider } from 'antd'
import { useHistory } from 'react-router-dom'
import * as B from 'src/components'
import theme from 'src/styles/theme'

export const PoolListItemCard = () => {
  const history = useHistory()
  return (
    <B.Box mb={2}>
      <B.BaseCard radius="5px" clickable onClick={() => history.push('/pool/view/pro')}>
        <B.Box display="flex" justify="space-between" align="center">
          <B.Box>
            <B.BaseText block size="big">
              방제목입니당 공부해요
            </B.BaseText>
            <B.BaseText block size="small" type="optional">
              영어자격증
              <Divider type="vertical" style={{ borderLeft: `1px solid ${theme.disabled}` }} /> 자유
              모드
            </B.BaseText>
            <B.BaseText block></B.BaseText>
          </B.Box>
          <B.Box>
            <B.BaseText>5 / 6</B.BaseText>
          </B.Box>
        </B.Box>
      </B.BaseCard>
    </B.Box>
  )
}
