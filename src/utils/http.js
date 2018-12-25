import axios from 'axios'

const http = {}
http.withToken = function withToken(store) {
  const a = {}
  a.post = function(url, data, opts) {
    return axios.post(url, data || {}, {
      headers: { Authorization: `Bearer ${store.user.me.token}` },
      ...(opts || {}),
    })
  }
  return a
}
export default http
