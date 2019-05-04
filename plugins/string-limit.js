import Vue from 'vue'

Vue.filter('stringLimit', (value, length, omission) => {
  length = length ? parseInt(length, 10) : 20
  let ommision = omission ? omission.toString() : '...'

  if (value.length <= length) {
    return value
  } else {
    return value.substring(0, length) + ommision
  }
})
