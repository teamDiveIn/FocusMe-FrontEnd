import { BrowserRouter, Switch } from 'react-router-dom'
import { PublicRoute } from './components/routes'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} />
        <PublicRoute path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
