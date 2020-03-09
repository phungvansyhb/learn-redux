import React, { Component } from 'react'

export default class SearchArea extends Component {
    render() {
        return (
            <div className="col-8">
                <div className="row">
                    <div className="col">
                        <input type="search" name="" id="input" className="form-control " required="required" title="" />
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary mb-4">Tìm kiếm</button>
                    </div>
                </div>
            </div>
        )
    }
}
