import styled from 'styled-components'
import { Layout, Drawer } from 'antd'
import { lighten } from 'polished'
const { Header, Content } = Layout

export const StyledHeaderWrapper = styled.div`
  margin-top: ${(props) => props.theme.headerHeight}px;
`

export const StyledHeader = styled(Header)`
  position: fixed;
  left: 0;
  right: 0%;
  top: 0;
  background-color: ${(props) => (props.backgroundcolor ? props.backgroundcolor : 'white')};
  padding: 0 20px;
  z-index: 1;

  ${(props) => (props.noheadershadow ? `` : `border-bottom: 1px solid rgba(0, 0, 0, 0.05);`)}

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledHeaderBox = styled.div`
  width: 100px;
`

export const StyledContent = styled(Content)`
  min-height: 100vh;
  width: ${(props) => (props.narrow ? '440px' : '1000px')};
  max-width: 100%;
  padding: ${(props) => (props.nopadding ? '0px' : '20px')};
  margin: 0 auto;
`

export const StyledDrawer = styled(Drawer)`
  & .ant-drawer-body {
    padding: 0;
  }
`

export const StyledDrawerItem = styled.div`
  cursor: pointer;
  padding: 18px 24px;
  transition: background-color 0.5s;
  border-bottom: 1px solid ${(props) => props.theme.disabled};
  color: ${(props) => props.theme.subText};

  &:hover {
    background-color: ${(props) => lighten(0.1, props.theme.primaryLight)};
  }
`
