import tpl from './info.tpl'

const oApp = document.querySelector('#app')

const info = tpl({
  name: 'tao',
  age: '18'
})

oApp.innerHTML = info
// console.log('info', info)