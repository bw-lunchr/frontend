import React from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios';
import {Divider, Grid, Segment, Button} from "semantic-ui-react";


class UserForm extends React.Component {
  state = {
    credentials: {
      email: '',
      password: ''
    },
    newCredentials: {
      email: '',
      password: ''
    },
    newObject: {
      email: 'blue@gmail.com',
      password: 'apple2'
    }
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.fullName]: e.target.value
      }
    });
  };

  handleChangeNew = (e) => {
    this.setState({
      newCredentials: {
        ...this.state.newCredentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = (e) => {
    e.preventDefault();
    axiosWithAuth()
    // post request
      .post('/admin/login', this.state.credentials)
      .then(res => {
        // localStorage
        localStorage.setItem('token', res.data.token);
        // redirect
        this.props.history.push('/AdminProfile');
      })
      .catch(error => console.log(error));
  };

  newLogin = () => {
    axios
      .post('https://bw-luncher.herokuapp.com/api/admin/register', this.state.newObject)
      .then(res => { 
        console.log('Server res:',res.data);
        //setStatus(res.data);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className='admin-form'>
        <Segment placeholder>
          <Grid columns={2} relaxed="very" stackable>
            <div class="right floated left aligned seven wide column">
              <Grid.Column>
                <div class="ui hidden divider"></div>
                <div class="ui hidden divider"></div>
                <form onSubmit={this.login}>
                  <h1>Login</h1>
                  <input type='email' name='email' placeholder="Email" 
                    value={this.state.credentials.email} onChange={this.handleChange} />
                  <div class="ui hidden divider"></div>
                  <input type='password' name='password' placeholder="Password" 
                    value={this.state.credentials.password} onChange={this.handleChange} />
                  <div class="ui hidden divider"></div>
                  <div class="adm-btn">
                  <Button>Login</Button>
                  </div>
                </form>
              </Grid.Column>
            </div>

            <div class="right floated left aligned seven wide column">
              <Grid.Column>
              <div class="ui hidden divider"></div>
                <h1>Create a Profile </h1>
                <form onSubmit={this.newLogin}>
                  {/* <input type="text" name="fullName" placeholder="Name" 
                    value={this.state.newCredentials.fullName} onChange={this.handleChangeNew} />
                  <div class="ui hidden divider"></div> */}
                  <input type="email" name="email" placeholder="Email" 
                    value={this.state.newCredentials.email} onChange={this.handleChangeNew} />
                  <div class="ui hidden divider"></div>
                  {console.log('Checking newCredentials:', this.state.newCredentials)}
                  <input type="password" name="password" placeholder="Password" 
                    value={this.state.newCredentials.password} onChange={this.handleChangeNew} />
                  <div class="ui hidden divider"></div>
                  <div class="adm-btn">
                    <Button>Submit</Button>
                  </div>
                </form>

              </Grid.Column>
            </div>
          </Grid>
          <Divider vertical>Or</Divider>
        </Segment>
      </div>
    );
  }
};

export default UserForm;
