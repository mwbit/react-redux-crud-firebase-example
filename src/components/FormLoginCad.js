import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { modifyName, modifyEmail, modifyPassword, saveLogin } from '../actions/FormLoginCadActions'

import AlertError from './AlertError'

class FormLoginCad extends Component {

  handleSubmit = event => {
    event.preventDefault()
    const { name, email, password } = this.props
    this.props.saveLogin(name, email, password)
    event.target.reset()
    event.target.name.focus()
  }

  render() {

    return (

      <div className="container justify-content-center border col-3 mt-5">
        <div className="row border bg-light" >
          <h4 className=" mt-2 ml-2">Login/Cad</h4>
        </div>
        <div className="row" >
        
          {/*  Poderia ter sido usado o redux-form para facilitar o desenvolvimento, porém foi usado essa abordagem para expor todo o ciclo do redux   */}
          <form className="col-12 " onSubmit={this.handleSubmit}>
            <div className="form-group mt-3">
              <div className="row col-12 mb-2" >
                <label for="nome">Name</label>
                <input type="text" className="form-control" value={this.props.name} name="name" placeholder="Name" onChange={this.props.modifyName} />
              </div>
              <div className="row col-12 mb-2 mt-3" >
                <label for="nome">Email</label>
                <input type="text" className="form-control" rows="4" value={this.props.email} name="email" placeholder="Email" onChange={this.props.modifyEmail} />
              </div>

              <div className="row col-12 mb-2 mt-3" >
                <label for="nome">Password</label>
                <input type="text" className="form-control" rows="4" value={this.props.password} name="password" placeholder="Password" onChange={this.props.modifyPassword} />
              </div>
              <div className="mb-3 d-flex">
                <button type="submit" className="btn btn-success  mr-2">Save</button>

              </div>
            </div>
          </form>
          {this.props.errorCad && <AlertError text={this.props.errorCad}/>}
          
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    name: state.FormLoginCadReducer.name,
    email: state.FormLoginCadReducer.email,
    password: state.FormLoginCadReducer.password,
    errorCad: state.FormLoginCadReducer.errorCad

  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ modifyName, modifyEmail, modifyPassword, saveLogin }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLoginCad)
