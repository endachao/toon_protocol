/**
 * Created by yuanchao on 2017/5/12.
 */
export default {
  getQueryStringByName: function (name) {
    let reg = new RegExp('\\?' + name + '=([^&]*)(&|$)')
    let result = location.href.substr(1).match(reg)

    if (result == null || result.length < 1) {
      return ''
    }
    return result[1]
  }
}
