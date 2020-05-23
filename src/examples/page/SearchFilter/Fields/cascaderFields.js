export default [
    {name:'placeholder',explain:'输入框默认占位文本',type:'string',default: '-'},
    {name:'options',explain:'下拉选项子集,必传',type:'array',default: '-'},
    {name:'showAllLevels',explain:'输入框中是否显示选中值的完整路径',type:'Boolean',default: 'true'},
    {name:'otherProps',explain:'其他属性，详情见element文档',type:'Object',default: '-'},
    {name:'collapseTags',explain:'多选时是否将选中值按文字的形式展示',type:'Boolean',default: 'false'},
    {name:'clearable',explain:'是否可以清空选项',type:'Boolean',default: 'false'},
    {name:'filterable',explain:'是否可搜索',type:'Boolean',default: 'false'},
    {name:'disabled',explain:'是否禁用',type:'Boolean',default: 'false'},
    {name:'change',explain:'选中值发生变化时触发',type:'Function',default: '-'},
]