// 导入组件，组件必须声明 name
import wInput from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
wInput.install = function (Vue) {
    Vue.component(wInput.name, wInput)
}

export default wInput
