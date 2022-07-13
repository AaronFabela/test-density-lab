import axios from 'axios'

export async function axiosRequest(url, method, headers, params) {
  return params
    ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
        timeout: 1000,
      })
    : axios({
        url: url,
        method: method,
        headers: headers,
        data: {},
        timeout: 1000,
      })
}

const getCommentsApi = () => {
  const headers = {
    'Content-type': 'application/json',
  }
  return axiosRequest('http://localhost:3000/', 'GET', headers, {})
}

const postCommentApi = (data) => {
  const headers = {
    'Content-type': 'application/json',
  }
  return axiosRequest('http://localhost:3000/', 'POST', headers, data)
}

const getCommentByIdApi = (id) => {
  const headers = {
    'Content-type': 'application/json',
  }
  return axiosRequest('http://localhost:3000/' + id, 'GET', headers, {})
}

const updateCommentApi = (data, id) => {
  const headers = {
    'Content-type': 'application/json',
  }
  return axiosRequest('http://localhost:3000/' + id, 'PUT', headers, data)
}

const deleteCommentApi = (id) => {
  const headers = {
    'Content-type': 'application/json',
  }
  return axiosRequest('http://localhost:3000/' + id, 'DELETE', headers, {})
}

export {
  getCommentsApi,
  postCommentApi,
  getCommentByIdApi,
  updateCommentApi,
  deleteCommentApi,
}
