import { message } from 'antd'
import { BrowserRouter, Switch } from 'react-router-dom'
import { PublicRoute } from './components/routes'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import MyPage from './pages/MyPage'
import NewPool from './pages/NewPool'
import RegisterCompletePage from './pages/Register/Complete'
import PoolViewPage from './pages/Pool/View'
import PoolListPage from './pages/Pool/List'

function App() {
  message.config({
    duration: 1,
    maxCount: 1,
  })

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} />
        <PublicRoute path="/register/complete" component={RegisterCompletePage} />
        <PublicRoute path="/register" component={RegisterPage} />
        <PublicRoute path="/mypage" component={MyPage} />
        <PublicRoute path="/newpool" component={NewPool} />
        <PublicRoute path="/pool/view/:id" component={PoolViewPage} />
        <PublicRoute path="/pool/view" component={PoolViewPage} /> {/* 퍼블리싱용 */}
        <PublicRoute path="/pool/list" component={PoolListPage} />
        <PublicRoute path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
