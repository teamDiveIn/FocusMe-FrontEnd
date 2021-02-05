/* eslint no-undef: "off" */
import { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'

export const useController = () => {
  const [visible, setVisible] = useState(false)
  const { sessionName } = useParams()

  const onToggleVisible = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  const onClose = useCallback(() => {
    setVisible(false)
  }, [])

  return { onToggleVisible, visible, onClose, sessionName }
}
