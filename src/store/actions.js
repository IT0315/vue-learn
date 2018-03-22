import * as types from './types'

export  default {
  increment(store,add){
    this.commit(types.INCREMENT,add)
  },
  decrement(store){
    this.commit(types.DECREMENT)
  },
  clickOdd({commit,state}){
    if(state.mutations.count%2==0){
      commit(types.INCREMENT)
    }
  }

}
