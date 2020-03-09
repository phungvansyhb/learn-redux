import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getNewItem} from '../Actions'
class FormEdit extends Component {
    constructor(props) {
        super(props)
        this.state= {}
    }
    
    getData = (e) => {
            
        this.setState({
                [e.target.name] : e.target.value
        })
         
    }
    
    handleSubmit = (e) => {
        
        e.preventDefault();
         const newItem = {
             id : this.props.oldItem.id,
             name: (this.state.name) ? this.state.name : this.props.oldItem.name,
             type: (this.state.type) ? this.state.type : this.props.oldItem.type
         }        
         this.props.getNewItem(newItem);
         this.props.changEditStatus()
    }

   
    render() {
        
        if( this.props.editStatus === true){
            return (
                <div className="col-4 float-right" >
                    <form  >
                        <div className="form-group">

                            <div >
                                <label className="sr-only " htmlFor="name">Tên công việc</label>
                                <input type="text" className="form-control" name="name" placeholder="nhập tên công việc..."
                                 required="required" ref="name" onChange ={ (e) => {this.getData(e)}} defaultValue={this.props.oldItem.name} />
                            </div>

                            <div>
                                <select name="type"  className="form-control" 
                                required="required" onChange ={ (e) => this.getData(e)} defaultValue={this.props.oldItem.type} >
                               
                                    <option >kích hoạt</option>
                                    <option >ẩn</option>
                                </select>
                            </div>    

                        </div>
                        <button type="submit" className="btn btn-primary" onClick={ (e) => this.handleSubmit(e)}>Gửi</button>
                        
                        <button type="" className="btn btn-secondary float-right" onClick= {() => this.props.changEditStatus()}>Đóng</button>
                    </form>
    
                </div>
            )
        }
        else return ( <div></div>)

        }
}
const mapStateToProps = (state) => {
    
    return {
        editStatus : state.edit.formEditStatus,
        oldItem: state.edit.oldItem
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators( {getNewItem : getNewItem }, dispatch),
        changEditStatus: () => {
            dispatch({type:"CLICK_BTN_EDIT"})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormEdit)