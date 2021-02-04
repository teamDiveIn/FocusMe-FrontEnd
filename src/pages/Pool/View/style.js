import styled from 'styled-components'

export const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-bottom: 100px; // Fixed Footer 여백
`

export const StyledCardWrapper = styled.div`
  flex: 0 0 280px;
  margin-bottom: 30px;
`

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 960px;
  max-width: calc(100% - 40px);
  margin-left: auto;
  margin-right: auto;
  color: white;
  background-color: #0c3b61;
  padding: 20px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`
