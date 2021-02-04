import { BrowserRouter, Switch } from 'react-router-dom'
import { PublicRoute } from './components/routes'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} />
        <PublicRoute path="/register" component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
