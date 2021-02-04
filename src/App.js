import { BrowserRouter, Switch } from 'react-router-dom'
import { PublicRoute } from './components/routes'
import HomePage from './pages/Home'
import JoinPage from './pages/Join'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" component={JoinPage} />
        <PublicRoute path="/login" component={LoginPage} />
        <PublicRoute path="/register" component={RegisterPage} />
        <PublicRoute path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
