import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { getNewItem } from '../Actions/index'
class FormAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
     autoId = () => {
        return "task"+Math.cos( Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random());
    }  
    handleSubmit = (e) => {
        e.preventDefault();
         const newItem = {
             id : this.autoId(),
             name:  this.state.name,
             type:  this.state.type
         }        
         this.props.getNewItem(newItem);
         this.props.changeAddStatus()
     }
     getData = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
     }
    render() {
        
        if( this.props.addStatus === false) return ( <div></div>)
        else{
            return (
                <div className="col-4" >
                    <form  >
                        <div className="form-group">

                            <div >
                                <label className="sr-only " htmlFor="name">Tên công việc</label>
                                <input type="text" className="form-control" name="name" placeholder="nhập tên công việc..."
                                 required="required" ref="name" onChange ={ (e) => {this.getData(e)}} defaultValue={this.props.oldItem.name} />
                            </div>

                            <div>
                                <select name="type" id="type" className="form-control" 
                                required="required" ref="type" onChange ={ (e) => this.getData(e)} defaultValue={this.props.oldItem.type}>
                                    
                                    <option >kích hoạt</option>
                                    <option >ẩn</option>
                                </select>
                            </div>    

                        </div>
                        <button type="submit" className="btn btn-primary" onClick={ (e) => this.handleSubmit(e)}>Gửi</button>
                    </form>
    
                </div>
            )
        }
      
    }
}

const mapStateToProps = (state) => {
    return {
        addStatus: state.edit.formAddStatus,
        editStatus  :state.edit.formEditStatus,
        oldItem : state.edit.oldItem
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators( {getNewItem : getNewItem }, dispatch),
    changeAddStatus: () => {
        dispatch({type:"CLICK_BTN_ADD"})
    },
   
    
})
export default connect(mapStateToProps , mapDispatchToProps)(FormAdd)