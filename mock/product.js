const tableData =[{
    date:'2020-06-06',
    name:'李称',
    address:'武汉科技大学城市学院北苑七舍504'
},{
    date:'2020-06-07',
    name:'刘晋',
    address:'武汉科技大学城市学院北苑七舍510'
},{
    date:'2020-06-08',
    name:'陈之翰',
    address:'武汉科技大学城市学院北苑七舍512'
},
]
export default [
    {
      url: '/vue-admin-template/product/list',
      type: 'get',
      response: config => {
        return {
          code: 20000,
          data: {
            total: tableData.length,
            items: tableData
          }
        }
      }
    }
  ]