import * as types from '../Actions/types'
var Data =   ( localStorage.getItem('task') === "undefined") ? [] : JSON.parse( localStorage.getItem('task')) ;
const initialState = {
    formAddStatus : false,
    formEditStatus:false,
    data : (Data) ? Data : [],
    oldItem:{},
    idRemove:0
}

export default (state = initialState, { type,payload }) => {

    switch (type) {

    case types.CLICK_BTN_ADD:
        return { ...state, formAddStatus : !state.formAddStatus }
    case types.CLICK_BTN_EDIT:
        return { ...state, formEditStatus : !state.formEditStatus }
    case types.GET_NEW_ITEM: 
        var count = 0;
        var x = state.data.filter ( (item) => {
            if(item.id === payload.id) {
                item.name = payload.name; 
                item.type = payload.type;
                count = 1;
                return item
            }else return item
        })
         if( count === 1 ) state.data  = x;
         else  state.data = state.data.concat(payload)
        localStorage.setItem('task', JSON.stringify(state.data) );
        return { ...state }
    case types.EDIT_WORK: 
        return { ...state, oldItem:payload }

    case types.REMOVE_ITEM : 
        return {...state , idRemove : payload}    
    case types.CANCEL_REMOVE: 
        return { ...state, idRemove:0 }
    case types.REMOVE: 
        console.log("remove dc goi");
        var y = state.data.filter((item) => {
            return item.id !== state.idRemove
        })
        state.data = y;
        localStorage.setItem('task', JSON.stringify(state.data) );
        return { ...state , idRemove : payload}
   
    default:
        return state
    }
}
