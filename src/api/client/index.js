import axios from 'axios'

const SESSION_EXPIRED_STATUS_CODE = 401

const axiosInstance = axios.create({
  baseUrl: 'https://nox-podcast-api.vercel.app',
})

const podcastClient = ({ ...options }) => {
  if (!localStorage.getItem('token')) {
    window.location.href = '/'
  }
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    'token',
  )}`

  const onSuccess = (response) => response
  const onError = (error) => {
    if (error.response.status === SESSION_EXPIRED_STATUS_CODE) {
      window.location.href = '/'
    }

    return Promise.reject(error)
  }

  return axiosInstance(options).then(onSuccess).catch(onError)
}

export default podcastClient
