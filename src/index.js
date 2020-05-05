/**
 * Created By shli on 2018/8/29
 */
import Button from './packages/button/index'

const components = [
  Button
]

const install = (Vue, opts = {}) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.1',
  install,
  Button
}

