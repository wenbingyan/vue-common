export default [
    {name:'options',explain:'渲染的子类，必传',type:'Array',default: '-'},
    {name:'span',explain:'每个多选框所占栅格比例',type:'Number',default: '12'},
    {name:'disabled',explain:'当前组件是否禁用',type:'Boolean',default: 'false'},
    {name:'optionsProps',explain:'option选项配置 {label:显示文本值,value:当前选项绑定值}',type:'Object',default: 'lable/value'},
    {name:'change',explain:'当前组件change改变方法',type:'Function',default: '-'}
]