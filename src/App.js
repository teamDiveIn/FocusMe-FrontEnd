import { message } from 'antd'
import { BrowserRouter, Switch } from 'react-router-dom'
import { PublicRoute, LoggedRoute } from './components/routes'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import MyPage from './pages/MyPage'
import NewPool from './pages/NewPool'
import RegisterCompletePage from './pages/Register/Complete'
import PoolViewPage from './pages/Pool/View'
import PoolListPage from './pages/Pool/List'
import IntroPage from './pages/Intro'
import { useUserContext } from './contexts/UserContext'

function App() {
  const { loading } = useUserContext()
  message.config({
    duration: 1,
    maxCount: 1,
  })

  return loading ? (
    <div></div>
  ) : (
    <BrowserRouter>
      <Switch>

      

        <PublicRoute path="/login" component={LoginPage} />
        <PublicRoute path="/register/complete" component={RegisterCompletePage} />
        <PublicRoute path="/register" component={RegisterPage} />
        
        <LoggedRoute path="/mypage" component={MyPage} />
        <LoggedRoute path="/newpool" component={NewPool} />
        <LoggedRoute path="/pool/view/:id" component={PoolViewPage} />
        <LoggedRoute path="/pool/view" component={PoolViewPage} /> {/* 퍼블리싱용 */}
        <LoggedRoute path="/pool/list" component={PoolListPage} />


        <PublicRoute path="/" component={IntroPage} /> {/* intro page */}
        <LoggedRoute path="/home" component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
