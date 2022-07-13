import { getCommentByIdApi } from '../api/axiosRequest'
import { useEffect, useState } from 'react'

function GetCommentByHook(props) {
  const [detailById, setdetailById] = useState({})
  const getCommentByHook = (requestId) => {
    return getCommentByIdApi(requestId).then((res) => {
      console.log('Hola', res.data[0])
      setdetailById(res.data[0])
    })
  }

  useEffect(() => {
    getCommentByHook(props)
  }, [])

  return [detailById]
}

export default GetCommentByHook
