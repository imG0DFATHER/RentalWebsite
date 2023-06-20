import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SideImg from './SideImg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = () => {

  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    bio: '',
    mobile: '',
    country: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  console.log(inpval);


  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('user'));
    const emails = [];
    if (userDetails != null) {
      userDetails.forEach((usr) => {
        emails.push(usr['email']);
      });
    }
    setUser(emails);
    let isAuth = JSON.parse(localStorage.getItem('user_login'));
    if (isAuth && isAuth === null) {
      history("/");
    }
  }, []);

  const getdata = (e) => {

    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = async (e) => {
    e.preventDefault();

    const { name, email, password, password_confirmation } = inpval;
    console.log(email);

    // POST request using fetch()
    const res = await fetch("http://localhost:7000/signup", {

      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        username: name,
        email: email,
        password: password,
        cpassword: password_confirmation
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert('Invalid Registration')
      console.log('Invalid Registration')
    } else {
      window.alert('Registration Successful')
      console.log('Successful Registration')

      history('/login');
    }


    // .then(res => res.json())
    // .then(json => console.log(json))

    // Converting to JSON

    // if (user.includes(email.toString())) {
    //   toast.error('Email already exists!', {
    //     position: 'top-center',
    //   });
    // } else if (name === '') {
    //   toast.error('Name field is required!', {
    //     position: 'top-center',
    //   });
    // } else if (email === '') {
    //   toast.error('Email field is required', {
    //     position: 'top-center',
    //   });
    // } else if (!email.includes('@')) {
    //   toast.error('Please enter valid email address', {
    //     position: 'top-center',
    //   });
    // } else if (password === '') {
    //   toast.error('Password field is required', {
    //     position: 'top-center',
    //   });
    // } else if (password.length < 5) {
    //   toast.error('Password length must be greater five', {
    //     position: 'top-center',
    //   });
    // } else if (password_confirmation === '') {
    //   toast.error('Enter password again', {
    //     position: 'top-center',
    //   });
    // } else if (password_confirmation !== password) {
    //   toast.error('Enter the same password', {
    //     position: 'top-center',
    //   });
    // } else {
    //   console.log('data added successfully');
    //   // localStorage.setItem("user", JSON.stringify([...data, inpval]));
    //   let oldData = JSON.parse(localStorage.getItem('user'));
    //   if (!oldData)
    //     localStorage.setItem('user', JSON.stringify([...data, inpval]));
    //   else {
    //     localStorage.setItem('user', JSON.stringify([...oldData, inpval]));
    //   }
    // }
  };

  return (
    <>
      <div className="container mt-20 font-link">
        <section className="d-flex justify-content-between -mr-12 ml-28">
          <div className="left_data mt-3 p-3" style={{ width: '100%' }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password_confirmation"
                  onChange={getdata}
                  placeholder="Confirm password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: 'rgb(20, 29, 53)' }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account{' '}
              <span className='text-blue-800'>
                <NavLink to="/login">SignIn</NavLink>
              </span>{' '}
            </p>
          </div>
          <SideImg />
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;
