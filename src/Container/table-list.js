import React, { Component } from 'react'
import Item from './table-list-item'
import { connect } from 'react-redux'

class TableList extends Component {
    handleCancel = () => {
        this.props.Cancel()
    }

     handleRemove = () => {
         this.props.Remove();
     }
    
    render() {
       
        return (
           
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT </th>
                            <th>Mô tả </th>
                            <th>Trạng thái </th>
                            <th> Thao tác </th>
                        </tr>

                    </thead>
                    <tbody>
                           <Item/>
                    </tbody>
                </table>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Thông báo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Bạn chắc chắn muốn xóa
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={ () => this.handleCancel()}>No</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick= {() =>this.handleRemove()}>Yes</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        idRemove: state.edit.idRemove
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        Cancel: () => {
            dispatch( {type:"CANCEL_REMOVE"} )
        },
        Remove : () => {
            dispatch( {type:"REMOVE"} )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableList)