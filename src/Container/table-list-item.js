import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getOldItem, getRemoveItemId} from '../Actions/index'

class Item extends Component {
    
     HandleEdit = ( item ) => {
         this.props.getOldItem(item);
         this.props.changeEditStatus()
     }   

    render() {
        // console.log("render")
        // console.log("bay h data la " + this.props.data)
        return (
           
             this.props.data.map( (item , key) => {
                
                    return ( 
                    
                    <tr key = {item.id}>
                        <td> {key+1} </td>
                        <td>{item.name}</td>
                        <td>{  (item.type==="ẩn") ? <span className="badge badge-pill badge-secondary">ẩn</span> : <span className="badge badge-pill badge-danger">kích hoạt</span>  }</td>
                        <td>
                            <button type="button" className="btn btn-danger" onClick= { () => { this.HandleEdit({id: item.id , name: item.name , type: item.type}) }}>
                                    Sửa</button>
                            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModal" onClick ={()=>this.props.getRemoveItemId(item.id)}>Xóa</button>
                        </td>
                        </tr>
                    )
                })
                
              
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        data: state.edit.data,
        editStatus :state.edit.formEditStatus,
    }
}
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({getOldItem : getOldItem}, dispatch),
    changeEditStatus: () => {
        dispatch({type:"CLICK_BTN_EDIT"})
    },
    ...bindActionCreators( {getRemoveItemId : getRemoveItemId}, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Item)