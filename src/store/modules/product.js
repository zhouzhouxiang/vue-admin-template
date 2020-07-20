import { getList } from '@/api/product'


const getDefaultState = () => {
  return {
    productList:[]
  }
}

const state = getDefaultState()

const mutations = {
    SET_PRODUCT: (state,tableData) => {
        state.productList = tableData
      },
}

const actions = {
  getProductList({ commit }) {
    return new Promise((resolve, reject) => {
        getList().then(response=>{
            console.log(response,"xxxxxxxxxx")
            const {data} = response
            const tableData = data.items
            commit("SET_PRODUCT",tableData)
        })
    })
  },

  
  


}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

