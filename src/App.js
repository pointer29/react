import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      username : '',
      password : ''
    }
  }

  onChange = (e) =>{
    const { target : { value,id } } = e;
    this.setState({

      [id]:value
    })
  }

  ceknclick = (e) =>{
    console.log('asd', this.state.username);
    console.log('asd', this.state.password);
    if(this.state.username=='' || this.state.password=='' ){
      alert('harap isi');
    }
  }



  render() {
   
    return (
      <Row type="flex" justify="space-around" align="middle" class="container">
      <Col span={12}>
      <Form className="login-form" >
        <Form.Item>
            <Input value={this.state.username} id='username' onChange={this.onChange}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              //required
            />
        </Form.Item>
        <Form.Item>
            <Input value={this.state.password} id='password' onChange={this.onChange}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              //required
            />
        </Form.Item>
        <Form.Item>
         <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button onfo onClick={this.cekonclick}
           type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      </Col>
      </Row>
    );
  }
}