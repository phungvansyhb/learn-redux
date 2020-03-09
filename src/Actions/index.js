
// Action la 1 doi tuong bao gom 1 truong 'type' bat buoc va  cac truong mo ta khac trong payload
// // vi du nhu the nay
// export const Count_down = {
//     type: "COUNT",
//     payload: {
//        text: "left"

//     }
// }
// export const Count_left ={
//     type: "COUNT",
//     payload: {
//         text:"right"
//     }
// }

// co the rut gon 2 action tren bang Action Creator -> thang nay la mot ham nhan vao tham so la thuoc tinh 
// trong payload viec dung Action Creator giam thieu viec lap code
//vd

import * as types from './types'            

export const getNewItem = (newItem) => ({
    type: types.GET_NEW_ITEM,
    payload : newItem  
})

export const getOldItem = (oldItem) => ({
    type: types.EDIT_WORK,
    payload : oldItem
})
export const getRemoveItemId = (id) => ({
    type: types.REMOVE_ITEM,
    payload : id
})

