import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import 'src/styles/global.css'
import { GlobalStyle } from './styles/global.styled'
import 'antd/dist/antd.less'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { UserProvider } from './contexts/UserContext'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
)
