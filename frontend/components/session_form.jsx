import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  componentDidMount(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(property) {
    return e => this.setState({[property]:e.target.value});
  }

  render(){
    let errors = <div></div>;
    if (this.props.errors) {
      errors = this.props.errors.map((error)=>(
        <li key={error}>{error}</li>
      ));
    }
    let title = 'Log In';
    let other = 'Sign Up';
    let url = '/signup';
    if (this.props.formType === 'signup') {
      title = 'Sign Up';
      other = 'Log In';
      url = '/login';
    }
    return(
      <div>
        {errors}
        <form onSubmit={this.handleSubmit}>
          <h1>{title}</h1>
          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            />
          <input
            type="text"
            value={this.state.password}
            onChange={this.update("password")}
            />
          <input type="submit" value={title}></input>
        </form>
        <Link to={url}>{other}</Link>
      </div>
    );
  }
}

export default SessionForm;
