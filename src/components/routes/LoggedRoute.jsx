import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUserContext } from 'src/contexts/UserContext'

export const LoggedRoute = ({ component, ...rest }) => {
  const { logged } = useUserContext()

  if (!component) return null
  const Component = component

  if (!logged) {
    return <Redirect to={`/login`} />
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component />
      }}
    />
  )
}
