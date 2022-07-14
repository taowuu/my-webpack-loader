const { tplReplace } = require('../utils')
const { getOptions } = require('loader-utils')

// 
function tplLoader(source) {
  // console.log('source', source)
  // <div><h1>{{name}}</h1><p>{{age}}</p></div>
  source = source.replace(/\s+/g, '')
  const { log } = getOptions(this);
  // 选项配置
  const _log = log ? `console.log('complie from ${this.resourcePath}')`:""
  return `
    export default(options) => {
      ${tplReplace.toString()}
      ${_log.toString()}
      return tplReplace('${source}', options)
    }
  `
}
// <div><h1>{{tao}}</h1><p>{{18}}</p></div>
module.exports = tplLoader