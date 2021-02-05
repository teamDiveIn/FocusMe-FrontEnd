import { Divider } from 'antd'
import { useHistory } from 'react-router-dom'
import * as B from 'src/components'
import theme from 'src/styles/theme'

export const PoolListItemCard = ({title, keyword, mode, peoplestatus}) => {
  const history = useHistory()
  return (
    <B.Box mb={2}>
      <B.BaseCard radius="5px" clickable onClick={() => history.push('/pool/view/pro')}>
        <B.Box display="flex" justify="space-between" align="center">
          <B.Box>
            <B.BaseText block size="big">
              {title}
            </B.BaseText>
            <B.BaseText block size="small" type="optional">
              영어자격증
              <Divider type="vertical" style={{ borderLeft: `1px solid ${theme.disabled}` }} /> { mode===1 ? ("자유모드"): ("조용한모드")}
            </B.BaseText>
            <B.BaseText block></B.BaseText>
          </B.Box>
          <B.Box>
            <B.BaseText>{peoplestatus}</B.BaseText>
          </B.Box>
        </B.Box>
      </B.BaseCard>
    </B.Box>
  )
}
