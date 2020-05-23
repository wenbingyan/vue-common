export default [
    {name:'type',explain:'显示类型 year/month/date/dates/ week/datetime/datetimerange/daterange',type:'String',default: 'date'},
    {name:'editable',explain:'文本框是否可输入',type:'Boolean',default: 'false'},
    {name:'clearable',explain:'是否显示清除按钮',type:'Boolean',default: 'false'},
    {name:'format',explain:'显示在输入框中的格式',type:'String',default: '-'},
    {name:'valueFormat',explain:'可选，绑定值的格式。不指定则绑定值为 Date 对象',type:'String',default: 'yyyy-MM-dd'},
    {name:'disabled',explain:'是否禁用',type:'Boolean',default: 'false'},
    {name:'pickerOptions',explain:'当前时间日期选择器特有的选项参考下表',type:'Object',default: '-'},
    {name:'change',explain:'当前组件change改变方法',type:'Function',default: '-'},
]