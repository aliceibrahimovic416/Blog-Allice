import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import Welcome from './Welcome';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      phone:'',
      password:'',
      error:''
    }
  }

  onChangeName = (e) =>{
    this.setState({name:e.target.value})
  }

  onChangeEmail = (e) =>{
    this.setState({email:e.target.value})
  }

  onChangePhone = (e) =>{
    this.setState({phone:e.target.value})
  }

  onSubmit = (e) =>{
    let { history } = this.props
    let ele;
    e.preventDefault()
    let olddata = localStorage.getItem('formdata')
    let oldArr = JSON.parse(olddata)
    oldArr.map(arr => 
      {
        if(this.state.name.length > 0 && this.state.password.length > 0){
          if (arr.name == this.state.name && (arr.password == this.state.password)) {
            let user = this.state.name;
            history.push({ pathname: "/welcome", user: this.state.name });
          }else{
            this.setState({error:'Please check your email or password'})
          }
        }
      }
      )
  }
  
  onChangePassword = (e) =>{
    this.setState({password:e.target.value})
  }

  render() {
    
    return (
      <form onSubmit={this.onSubmit}>
        <p className="error">
          {this.state.error}
        </p>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} required />
        </div>
        <button type="submit" className="btn btn-primary btn-block" onClick={this.props.onLogin}>Login</button>
      </form>
    )
  }
}

export default Login;
