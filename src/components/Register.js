import React from 'react'
import { withFormik, Form, Field } from 'formik';
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';

const RegisterPage = (props) => {

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
          <h2>Register Page</h2>
          <Form className="form-container">
          <br></br>
   
            <div className="form-group">
              <label htmlFor="userName">Username</label>
              <Field type="text" name="userName" className={"form-control"} />
              { touched.userName && errors.userName && <span className="help-block text-danger">{errors.userName}</span> }
            </div>
            <br></br>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className={"form-control"}  />
              { touched.password && errors.password && <span className="help-block text-danger">{errors.password}</span> }
            </div>
            <br></br>

            <div className="form-group">
              <label htmlFor="passwordConfirmation">Confirm Password</label>
              <Field type="password" name="passwordConfirmation" className={"form-control"} placeholder="Password" />
              { touched.password && errors.password && <span className="help-block text-danger">{errors.password}</span> }
            </div>
            <br></br>



            <br></br>
            <button type="submit" className="btn btn-primary" onClick = {()=> navigate("/Login")} >Register</button>
            <br></br>
            <br></br>
            <h2>Have an account already?</h2>
            <br></br>
         </Form>
         
        <button className="btn btn-primary" onClick = {()=> navigate("/Login")}  >
       Sign In
        </button>
        </div>
      </div>
    </React.Fragment>
  );
}


const RegisterFormik = withFormik({
  mapPropsToValues: (props) => {
   
   return {
      //firstName: props.firstName || '',  
      //lastName: props.lastName || '',
      //email: props.email || '',
      userName: props.userName || '',
      password: props.password || '',
      passwordConfirmation:'',
      roles: ['User']
   
    }  
  },
  validationSchema: Yup.object().shape({
    userName: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
   passwordConfirmation: Yup.string()
  .oneOf([Yup.ref('password'), null],"Passwords do not match")

  }),



  handleSubmit: (values) => { 
       console.log(values);
    const REST_API_URL = "api/users/create";
    fetch(REST_API_URL, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json;'
    }}).then(function(response) {
      if (response.ok) {
       
        return response.json();
      }
    }).then(data => {
      // HANDLE RESPONSE DATA
      console.log(data);
    }).catch((error) => {
      // HANDLE ERROR
      console.log(error);
    });
  }

  
})(RegisterPage);

export default RegisterFormik
       /*  <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <Field type="text" name="firstName" className={"form-control"} placeholder="firstName" />
              { touched.firstName && errors.firstName && <span className="help-block text-danger">{errors.firstName}</span> }
            </div>
            <br></br>

            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <Field type="text" name="lastName" className={"form-control"} placeholder="lastName" />
              { touched.lastName && errors.lastName && <span className="help-block text-danger">{errors.lastName}</span> }
            </div>
            <br></br>


            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="text" name="email" className={"form-control"} placeholder="email" />
              { touched.email && errors.email && <span className="help-block text-danger">{errors.email}</span> }
            </div>
            <br></br>


  <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <Field type="passwordConfirmation" name="passwordConfirmation" className={"form-control"} placeholder="Password" />
              { touched.password && errors.password && <span className="help-block text-danger">{errors.password}</span> }
            </div>
            <br></br>



*/
