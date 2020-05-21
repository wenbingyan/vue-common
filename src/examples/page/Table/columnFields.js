export default [
    {name:'fieldName',explain:'对应表格数据源绑定值',type:'String',default: '-'},
    {name:'titleName',explain:'当前表头标题',type:'String',default: '-'},
    {name:'sortable',explain:'对应列是否可以排序',type:'[Boolean,String]',default: 'false'},
    {name:'body_slot',explain:'是否启用表格内容插槽，插槽具体调用参考 组件调用例子（带插槽调用），插槽名为对应的fieldName_body',type:'String',default: 'false'},
    {name:'header_slot',explain:'是否启用表格表头插槽，插槽具体调用参考 组件调用例子（带插槽调用），插槽名为对应的fieldName_header',type:'String',default: 'false'},
    {name:'minWidth',explain:'对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列',type:'[String,Number]',default: '-'},
    {name:'width',explain:'对应列的宽度',type:'[String,Number]',default: '-'},

]