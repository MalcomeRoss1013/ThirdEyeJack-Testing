import React from 'react'
import { withFormik, Form, Field } from 'formik';
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';

const LoginPage = (props) => {
  const navigate = useNavigate()
  const loginPageStyle = {
    margin: "32px auto 37px",
    maxWidth: "530px",
    background: "#001233",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
    color: "#ffffff",
  };

  const { touched, errors } = props;  
   return(
    <React.Fragment>
      <div className="container">
        <div className="login-wrapper" style={loginPageStyle}>
          <h2>Login Page</h2>
          <Form className="form-container">
          <br></br>
            <div className="form-group">
              <label htmlFor="userName">Username</label>
              <Field type="text" name="userName" className={"form-control"} placeholder="UserName" />
              { touched.userName && errors.userName && <span className="help-block text-danger">{errors.userName}</span> }
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className={"form-control"} placeholder="Password" />
              { touched.password && errors.password && <span className="help-block text-danger">{errors.password}</span> }
            </div>
            <br></br>

            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheck1"></input><label class="custom-control-label" for="customCheck1">Remember me</label></div>
         
            <br></br>
            <button type="submit" className="btn btn-primary" onClick = {()=> navigate("/")}  >Login</button>
         </Form>
        </div>
      </div>
    </React.Fragment>
  );
}


const LoginFormik = withFormik({
  mapPropsToValues: (props) => {
    return {
      userName: props.userName || '',
      password: props.password || ''
    }
  },
  validationSchema: Yup.object().shape({
    userName: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  }),


  
  handleSubmit: (values) => {
    console.log(values);
    const REST_API_URL = "api/authentication/login";
    fetch(REST_API_URL, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }}).then(function(response) {
      if (response.ok) {
       
        return response.json();
      } else {
        // HANDLE ERROR
        throw new Error('Something went wrong');
      }
    }).then(data => {
      // HANDLE RESPONSE DATA
      console.log(data);
    }).catch((error) => {
      // HANDLE ERROR
      console.log(error);
    });
  }

  
})(LoginPage);

export default LoginFormik
