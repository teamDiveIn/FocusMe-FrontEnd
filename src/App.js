import { BrowserRouter, Switch } from 'react-router-dom'
import { PublicRoute } from './components/routes'
import LoginPage from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
