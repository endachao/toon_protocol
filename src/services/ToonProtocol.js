/**
 * Created by yuanchao on 2017/5/10.
 */
import Vue from 'vue'

class ToonProtocol {

  constructor (path, params, isHttps = false) {
    this.path = path + '?params=' + JSON.stringify(params)
    this.params = params
    // this.params.flagId = this.generateFlagId()
    this.params.flagId = '123'
    this.resultUrl = this.generateResultUrl(isHttps)
  }

  generateFlagId () {
    return new Date().getTime() + Math.random()
  }

  generateResultUrl (isHttps) {
    return isHttps ? 'https://127.0.0.1:6781/getResult' : 'http://127.0.0.1:6780/getResult'
  }

  async send () {
    window.location.href = this.path
    let params = 'params={"flagId":' + this.params.flagId + '}'
    alert(this.path)
    alert(params)
    alert(this.resultUrl)
    return await Vue.http.post(this.resultUrl, 'params={"flagId":"123"}').then((response) => {
      console.log(response)
      alert(JSON.stringify(response))
      return response
    }, (response) => {
      alert('失败')
      console.log(response)
      alert(JSON.stringify(response))
      return response
    })
  }

}

export default ToonProtocol
