import React, { Component } from 'react'
import FormAdd from '../Container/form-add'
import FormEdit from '../Container/form-edit'
import TableList from '../Container/table-list';
import SearchArea from '../Container/search-area';
import {connect} from 'react-redux'

class App extends Component {
  
    
    handleClick = () =>{
        this.props.changeAddStatus();
        
    }
    // adddata = () => {
    //     localStorage.setItem('task',JSON.stringify( [{id:123124124134 , name:"ngu day" , status: "kich hoat"} ,
    //     {id:141234234234 , name:"rua mat" , status: "kich hoat"} ,
    //     {id:223124342134 , name:"an com" , status: "kich hoat"} ,
    //     {id:453413423121 , name:"di hoc" , status: "kich hoat"} 

    //         ]) )
    // }
    render() {
        return (
            <div >
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <button type="button" className="btn btn-success mb-4" onClick ={ () => this.handleClick()}>
                                    { ( this.props.addStatus === true  ) ? "Đóng" : "Thêm mới"}

                                </button>
                                {/* <button type="button" className="btn btn-success mb-4" onClick ={ () => this.adddata()}>Thêm mới</button> */}
                               
                            </div>
                            <SearchArea />
                        </div>

                        <div className="row">
                            <FormAdd />
                            <TableList />
                            <FormEdit/>
                        </div>
                        <div className="card-footer text-muted mt-5 text-center">
                            CopyRight by @phungsy
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
       
        addStatus: state.edit.formAddStatus
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeAddStatus: () => {
            dispatch({type: "CLICK_BTN_ADD"})
        },
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)