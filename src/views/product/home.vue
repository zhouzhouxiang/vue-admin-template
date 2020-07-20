<template>
  <el-table :data="products" style="width:100%">
      <el-table-column prop="date" label="日期" width="250"></el-table-column>
      <el-table-column prop="name" label="姓名" width="250"></el-table-column>
      <el-table-column prop="address" label="地址" width="250"></el-table-column>
  </el-table>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            // tableData:[{
            //     date:'2020-06-06',
            //     name:'李称',
            //     address:'武汉科技大学城市学院北苑七舍504'
            // },{
            //     date:'2020-06-07',
            //     name:'刘晋',
            //     address:'武汉科技大学城市学院北苑七舍510'
            // },{
            //     date:'2020-06-08',
            //     name:'陈之翰',
            //     address:'武汉科技大学城市学院北苑七舍512'
            // },
            // ]
        }
    },
    computed:{
        ...mapGetters(["products"])
    },
    methods:{
        getProducts(){
            this.$store.dispatch('product/getProductList')
        }
    },
    mounted(){
        this.getProducts()
    }

}
</script>

<style>

</style>