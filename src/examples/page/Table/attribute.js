export default [
    {name:'dataSource',explain:'数据源',type:'array',default: '[]'},
    {name:'columns',explain:'表头数集',type:'array',default: '[]'},
    {name:'info',explain:'表格分页相关数据',type:'object',default: '{ pageNum: 1, pageSize: 10, total: 0 }'},
    {name:'type',explain:'表格功能（包含pagination：显示分页，multi：多选，single：单选；operationColumn：是否显示操作列；showSummary：是否设置表格的合计行）',type:'object',default: '{pagination: true,multi: false,single: false,operationColumn: false,showSummary: false}'},
    {name:'loading',explain:'表格loading状态',type:'boolean',default: 'false'},
    {name:'border',explain:'是否带有纵向边框',type:'boolean',default: 'false'},
    {name:'stripe',explain:'是否为斑马纹',type:'boolean',default: 'false'},
    {name:'maxHeight',explain:'Table 的最大高度',type:'string/number',default: '-'},

    {name:'rowKey',explain:'行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的',type:'string/number',default: 'Function(row)/String'},
    {name:'editColWidth',explain:'操作列的宽度',type:'number',default: '260'},
    {name:'align',explain:'表格对齐方式',type:'string',default: 'center'},
    {name:'headerAlign',explain:'表头对齐方式',type:'string',default: 'center'},

    {name:'handleRowClassName',explain:'行class回调方法',type:'function',default: '-'},
    {name:'handleCellClassName',explain:'列class回调方法',type:'function',default: '-'},
    {name:'handleRowStyle',explain:'行style回调方法',type:'function',default: '-'},
    {name:'handleCellStyle',explain:'列style回调方法',type:'function',default: '-'},

]