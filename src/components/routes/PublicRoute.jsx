import React from 'react'
import { Route } from 'react-router-dom'

export const PublicRoute = ({ component, ...rest }) => {
  if (!component) return null
  const Component = component
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component />
      }}
    />
  )
}
