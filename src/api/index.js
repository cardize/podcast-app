var axios = require('axios')
var qs = require('qs')
var data = qs.stringify({})
var config = {
  method: 'get',
  url: 'https://nox-podcast-api.vercel.app/search',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE2NDM4MDM4Nzh9.Xc1XunOeBVfVe1tCDnibOMHIjPKQL0l7qt49ypMNF3c',
  },
  data: data,
}
var data = JSON.stringify({
  email: 'test@example.com',
  password: '123456',
})

var config = {
  method: 'post',
  url: 'https://nox-podcast-api.vercel.app/login',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE2NDM4MDM4Nzh9.Xc1XunOeBVfVe1tCDnibOMHIjPKQL0l7qt49ypMNF3c',
    'Content-Type': 'application/json',
  },
  data: data,
}

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data))
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
