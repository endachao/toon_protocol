/**
 * Created by yuanchao on 2017/5/10.
 */
import Vue from 'vue'

class ToonProtocol {

  constructor (path, params, isHttps = false) {
    this.params = params
    this.params.flagId = this.generateFlagId()
    this.resultUrl = this.generateResultUrl(isHttps)
    this.path = path + '?params=' + JSON.stringify(this.params)
  }

  generateFlagId () {
    return new Date().getTime()
  }

  generateResultUrl (isHttps) {
    return isHttps ? 'https://127.0.0.1:6781/getResult' : 'http://127.0.0.1:6780/getResult'
  }

  async send () {
    window.location.href = this.path
    // parseInt(this.params.flagId)
    return await Vue.http.post(this.resultUrl, 'params={"flagId":' + parseInt(this.params.flagId) + '}').then((response) => {
      console.log(response)
      alert('success')
      return response.body
    }, (response) => {
      alert('error')
      console.log(response)
      return response
    })
  }

}

export default ToonProtocol
