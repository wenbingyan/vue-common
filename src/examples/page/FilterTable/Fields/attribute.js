export default [
    {name:'Fields',explain:'搜索框的config数集',type:'array',default: '[]'},
    {name:'filterForm',explain:'搜索框form数据,必传',type:'object',default: '-'},
    {name:'onchange',explain:'搜索框查询',type:'function',default: '-'},
    {name:'onReset',explain:'搜索框重置',type:'function',default: '-'},
    {name:'loading',explain:'表格loading',type:'Boolean',default: 'false'},
    {name:'tableTitle',explain:'表格标题',type:'string',default: '-'},
    {name:'tableHeader',explain:'表格表头配置，必传',type:'array',default: '-'},
    {name:'tableData',explain:'表格数据',type:'array',default: '-'},
    {name:'tableInfo',explain:'表格页码基本数据',type:'object',default: '-'},
    {name:'tableType',explain:'表格不同功能类型，参考table组件',type:'object',default: '-'},
]