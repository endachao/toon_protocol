/**
 * Created by yuanchao on 2017/5/12.
 */
export default {
  getQueryStringByName: function (search, name) {
    let reg = new RegExp('\\?' + name + '=([^&]*)(&|$)')
    let result = search.substr(1).match(reg)

    if (result == null || result.length < 1) {
      return ''
    }
    return result[1]
  },
  server_uri: '172.31.244.31:3000'
}
