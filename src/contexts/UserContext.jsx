import React, { useContext, useEffect } from 'react'
import { createContext, useCallback, useState } from 'react'
import storage from 'src/utils/utils.storage'
import { loadUser } from 'src/services/user.service'
import { useHistory } from 'react-router-dom'

const UserContext = createContext({})

export function useUserContext() {
  return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [logged, setLogged] = useState(false)
  const history = useHistory()

  useEffect(() => {
    loadUser()
      .then((user) => {
        if (user) onLogin(user)
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
      })
    // eslint-disable-next-line
  }, [])

  const onLogout = useCallback(() => {
    setUser({})
    setLogged(false)

    storage.removeItem('accessToken')

    history.replace('/')
  }, [setUser, setLogged, history])

  const onLogin = (user) => {
    setUser(user)
    setLogged(true)
  }

  return (
    <UserContext.Provider value={{ user, logged, onLogin, onLogout, loading }}>
      {children}
    </UserContext.Provider>
  )
}
