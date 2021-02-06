/* eslint no-undef: "off" */
import { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export const useController = () => {
  const [visible, setVisible] = useState(false)
  const [exitVisible, setExitVisible] = useState(false)
  const history = useHistory()
  const { sessionName } = useParams()

  const onToggleVisible = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  const onClose = useCallback(() => {
    setVisible(false)
  }, [])

  const onExitClose = useCallback(() => {
    setExitVisible(false)

    history.push('/pool/list')
  }, [history])

  return {
    onToggleVisible,
    visible,
    onClose,
    sessionName,
    exitVisible,
    onExitClose,
    setExitVisible,
  }
}
