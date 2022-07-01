var axios = require('axios')

const Auth = function (email, password, navigate, failed) {
  var data = JSON.stringify({
    email: email, //'test@example.com',
    password: password, //'123456',
  })

  var config = {
    method: 'post',
    url: 'https://nox-podcast-api.vercel.app/login',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  }

  axios(config)
    .then((response) => {
      console.log(response)
      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token)
        navigate()
      } else {
        failed()
      }
    })
    .catch((error) => {
      alert(error)
    })
}

export default Auth
