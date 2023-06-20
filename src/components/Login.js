// Compare loggedIn email with "user" emails and fetch "user" details instead of userLogin details

import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SideImg from "./SideImg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  // console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = async (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    const res = await fetch("http://localhost:7000/signin", {
      // Adding method type
      method: "POST",

      credentials: "include", // Don't forget to specify this if you need cookies

      // Adding body or contents to send
      body: JSON.stringify({
        email: email,
        password: password,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },

      withCredentials: true,
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        if (data.ok) {
          window.alert("Login Successful");
          history("/dashboard");
        } else {
          window.alert("Invalid Credentials");
        }
      })
      .catch((error) => {
        console.log(error);
        window.alert("Invalid Credentials");
      });

    // const data = res.json();
    // console.log(data);
    // if (res.status === 400 || !data) {
    //   window.alert("Invalid Credentials");
    // } else {
    //   window.alert("Login Successful");
    //   history("/dashboard");
    // }

    // .then(res => res.json())
    // .then(json => console.log(json))

    // history('/login');

    // e.preventDefault();

    // const getuserArr = localStorage.getItem("user");
    // console.log(getuserArr);

    // const { email, password } = inpval;
    // if (email === "") {
    //     toast.error('email field is required', {
    //         position: "top-center",
    //     });
    // } else if (!email.includes("@")) {
    //     toast.error('Please enter valid email address', {
    //         position: "top-center",
    //     });
    // } else if (password === "") {
    //     toast.error('Password field is required', {
    //         position: "top-center",
    //     });
    // } else {

    //     if (getuserArr && getuserArr.length) {
    //         const userdata = JSON.parse(getuserArr);
    //         const userlogin = userdata.filter((el, k) => {
    //             return el.email === email && el.password === password
    //         });

    //         if (userlogin.length === 0) {
    //             alert("invalid details")
    //         } else {
    //             console.log("user login succesfulyy");
    //             localStorage.setItem("user_login", JSON.stringify(userlogin))
    //             // let oldData = JSON.parse(localStorage.getItem('user_login'))
    //             // localStorage.setItem('user_login', JSON.stringify([...oldData, ...userlogin]));

    //             navigate("/dashboard")
    //         }
    //     }
    // }
  };

  return (
    <>
      <div className="container mt-20 font-link">
        <section className="d-flex justify-content-between -mr-12 ml-28">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>
            <Form>
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
              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: "rgb(20, 29, 53)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
          <SideImg />
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
