import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditableProfile from "./EditableProfile2";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import { data } from "./MockData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import GridOfCards from "./GridOfCards";
// import banner1 from '../public/AC-banner-Web-.jpg';

const Dashboard = (props) => {
  const [logindata, setLoginData] = useState([]);

  const history = useNavigate();

  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 292;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 292;
  };

  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);
  // console.log(document.cookie);

  const userDashboard = async () => {
    try {
      const res = await fetch("http://localhost:7000/about/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        credentials: "include",
      });
      console.log("before");
      // debugger;
      console.log(res);
      const data = await res.json();
      console.log("after");
      // console.log(data);
      setUserName(data.username);
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  // const Birthday = () => {
  //   const getuser = localStorage.getItem('user_login');
  //   // const getuser = localStorage.getItem("user");

  //   if (getuser && getuser.length) {
  //     const user = JSON.parse(getuser);

  //     setLoginData(user);

  //     const userbirth = logindata.map((el, k) => {
  //       return el.date === todayDate;
  //     });

  //     if (userbirth) {
  //       setTimeout(() => {
  //         console.log('ok');
  //         handleShow();
  //       }, 1000);
  //     }
  //   }
  // };

  const cards = [
    {
      //id
      title: "Lenses",
      description: "This is the third card",
      color: "bg-site-cream",
      // img: 'https://unsplash.com/photos/RUJUmtwY27k/download?force=true&w=640',
      img: "https://unsplash.com/photos/RUJUmtwY27k/download?force=true&w=1920",
    },
    {
      title: "Cameras",
      description: "This is the second card",
      color: "bg-site-cream",
      // img: 'https://unsplash.com/photos/F3Dde_9thd8/download?force=true&w=640',
      img: "https://unsplash.com/photos/F3Dde_9thd8/download?force=true&w=1920",
    },
    {
      title: "Appliances",
      description: "This is the second card",
      color: "bg-site-cream",
      // img: 'https://unsplash.com/photos/9L0zCCeD6J4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTF8fHNld2luZyUyMG1hY2hpbmV8ZW58MHx8fHwxNjgyNDAyMjEx&force=true&w=640',
      img: "https://unsplash.com/photos/9L0zCCeD6J4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTF8fHNld2luZyUyMG1hY2hpbmV8ZW58MHx8fHwxNjgyNDAyMjEx&force=true&w=1920",
    },
    {
      title: "Fitness",
      description: "This is the fourth card",
      color: "bg-site-cream",
      // img: 'https://unsplash.com/photos/X3huptykYH0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8dHJlYWRtaWxsfGVufDB8fHx8MTY4MjM5OTg2OA&force=true&w=640',
      img: "https://unsplash.com/photos/X3huptykYH0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8dHJlYWRtaWxsfGVufDB8fHx8MTY4MjM5OTg2OA&force=true&w=1920",
    },
    {
      title: "Drones",
      description: "This is the first card",
      color: "bg-site-cream",
      // img: 'https://unsplash.com/photos/XYrjl3j7smo/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTZ8fGRyb25lc3xlbnwwfHx8fDE2ODIzODczMzI&force=true&w=640',
      img: "https://unsplash.com/photos/XYrjl3j7smo/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTZ8fGRyb25lc3xlbnwwfHx8fDE2ODIzODczMzI&force=true&w=1920",
    },
    {
      title: "Furniture",
      description: "This is the first card",
      color: "bg-site-cream",
      // img: 'https://unsplash.com/photos/fZuleEfeA1Q/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fHx8MTY4MjM5OTYzNw&force=true&w=640',
      img: "https://unsplash.com/photos/fZuleEfeA1Q/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fHx8MTY4MjM5OTYzNw&force=true&w=1920",
    },
    {
      title: "Instruments",
      description: "This is the fourth card",
      color: "bg-site-cream",
      // img: 'https://unsplash.com/photos/b57RqS-nQ1c/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8Z3VpdGFyfGVufDB8fHx8MTY4MjM5NzA4Mw&force=true&w=640',
      img: "https://unsplash.com/photos/b57RqS-nQ1c/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8Z3VpdGFyfGVufDB8fHx8MTY4MjM5NzA4Mw&force=true&w=1920",
    },
    {
      title: "Electronics",
      description: "This is the third card",
      color: "bg-site-cream",
      // img: 'https://unsplash.com/photos/MvJezf8FT4o/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8dnIlMjBoZWFkc2V0fGVufDB8fHx8MTY4MjQwMzI0Ng&force=true&w=640',
      img: "https://unsplash.com/photos/MvJezf8FT4o/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8dnIlMjBoZWFkc2V0fGVufDB8fHx8MTY4MjQwMzI0Ng&force=true&w=1920",
    },
    {
      title: "Projectors",
      description: "This is the fourth card",
      color: "bg-site-cream",
      // img: 'https://unsplash.com/photos/MAYsdoYpGuk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvamVjdG9yfGVufDB8fHx8MTY4MjQwMDA5Mw&force=true&w=640',
      img: "https://unsplash.com/photos/MAYsdoYpGuk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvamVjdG9yfGVufDB8fHx8MTY4MjQwMDA5Mw&force=true&w=1920",
    },
    {
      title: "Vehicles",
      description: "This is the fourth card",
      color: "bg-site-cream",
      // img: 'https://unsplash.com/photos/8a1FvEXkZwo/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTR8fDR4NHxlbnwwfHx8fDE2ODI0MDAyMDQ&force=true&w=640',
      img: "https://unsplash.com/photos/8a1FvEXkZwo/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTR8fDR4NHxlbnwwfHx8fDE2ODI0MDAyMDQ&force=true&w=1920",
    },
  ];

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  const editprofile = () => {
    history("/editprofile");
  };

  useEffect(() => {
    // Birthday();
    userDashboard();
  }, []);

  const cardClick = (event, card) => {
    console.log(card);
    props.setCategoryName(card.title);
    history(`/dashboard/${card.title}`);
    <GridOfCards name={card.title}></GridOfCards>;
  };

  return (
    <>
      <Header />

      {show ? (
        <h4 className="font-link ml-16 mt-6">Hey {userName},</h4>
      ) : (
        <h4 className="font-link ml-16 mt-6">Good Morning</h4>
      )}
      {/* {logindata[0].name} */}
      <Carousel />
      {/* <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" /> */}
      <div id="categories" className="bg-white h-9"></div>
      <div className="block -z-10 bg-site-blue/5 rounded-xl mx-6 pt-14 pb-20">
        <div className="font-link text-xl font-semibold flex justify-center mb-8">
          CATEGORIES
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-6 ml-16 mr-16">
          {cards.map((card, index) => (
            <div
              onClick={(event) => cardClick(event, card)}
              key={index}
              className={`rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg ease-in-out duration-300 shadow-md ${card.color}`}
            >
              <div>
                <img
                  className="w-full inline-block rounded-t-xl shadow-sm cursor-pointer"
                  // hover:scale-105 ease-in-out duration-300
                  src={card.img}
                  alt="/"
                />
              </div>
              <h3 className="text-base font-link flex justify-center font-light mt-2">
                {card.title}
              </h3>
              {/* <p className="text-gray-600">{card.description}</p> */}
            </div>
          ))}
        </div>
      </div>

      {/* {
                            logindata[0].date === todayDate ?
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{logindata[0].name} 😄</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Wish you many many happy returns of the day ! 🍰</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                        <div className="mt-6 ml-20 mb-8 flex items-center justify-start gap-x-6">
                                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="rounded-md bg-site-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal> : ""
                        } */}
      {/* <img
                            className='w-full h-[440px] object-cover mt-8 '
                            src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80'
                            alt=''
                        /> */}
      {/* <div className='h-[0px] w-full shadow-2xl'></div> */}
      <div className="bg-site-cream/50 shadow-inner py-6 pt-28 mt-4">
        <div className="ml-20 font-link text-site-blue text-xl font-semibold">
          You'll love to
        </div>

        <div className="ml-20 font-link text-site-blue/70 text-xl">
          take these home
        </div>
        {/* 
            <div class="w-60 h-2 flex justify-center items-center ml-20">
              <div class=" w-60 h-1 relative z-0 blur-sm bg-gradient-to-r from-blue-400 to-sky-300 my-1 ml-20 ">
                <div class="absolute inset-0 flex justify-center items-center z-10">
                  <div class="w-60 h-0.5 blur-none bg-white"></div>
                </div>
              </div>
            </div> */}

        {/* <div className="flex justify-start items-center">
              <div className="relative z-0 w-60 h-0.5 blur-sm bg-gradient-to-r from-blue-400 to-sky-300 my-1 ml-20 ">
              </div>
              <div className="absolute blur-none inset-0 flex justify-center items-center z-10 w-60 h-2 my-1 ml-20 bg-blue-300 border border-blue-300 rounded md:my-10 dark:bg-blue-300"> */}
        {/* <hr className="w-60 h-1 blur-none my-1 ml-20 bg-blue-300 border border-blue-300 rounded md:my-10 dark:bg-blue-300" /> */}
        {/* </div>
            </div> */}

        {/* <hr className="w-60 h-1 my-1 ml-20 bg-blue-300 border border-blue-300 rounded md:my-10 dark:bg-site-blue" /> */}
        <div className="w-60 h-0.5 bg-gradient-to-r from-site-blue to-sky-300 my-1 ml-20 border border-blue-300 rounded md:my-10 "></div>
        {/* <div className="w-60 h-1 blur-0 ml-20 bg-blue-300 border border-blue-300 rounded md:my-10 dark:bg-blue-300/90"></div> */}
      </div>
      <div className="relative bg-site-cream/50 flex items-center pb-16">
        <MdChevronLeft
          className=" text-site-blue/25 hover:text-site-blue/75 cursor-pointer ml-1 pl-1"
          onClick={slideLeft}
          size={50}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item) => (
            <div
              className={`rounded-sm border border-site-blue mx-3 inline-block p-4 w-[260px] h-[380px] cursor-pointer shadow-md bg-white`}
              // ${item.color}
            >
              <img
                className="w-[220px] h-[210px] inline-block object-cover p-2 cursor-pointer rounded-sm"
                // hover:scale-105 ease-in-out duration-300
                src={item.img}
                alt="/"
              />
              <br />
              <div className="font-link ml-2 mt-2 text-base font-medium text-site-blue">
                {item.name}
              </div>
              <div className="font-link ml-2 text-sm font-light text-site-blue/50">
                {item.category}
              </div>

              <hr className="ml-2 mr-2 -mb-0 text-site-blue/50" />

              <div className="flex flex-row ml-2 mt-1.5 mb-44 gap-3">
                <div className="flex flex-col">
                  <div className="font-link text-xs mt-2 text-site-blue/50">
                    Rent Amount
                  </div>
                  <div className="font-link text-base text-site-blue mt-1">
                    ₹ {item.price}
                  </div>
                </div>
                <button className="font-link text-sm flex justify-end ml-3 mt-2.5 py-2.5 bg-site-transparent text-site-blue hover:bg-site-blue font-light hover:text-white border border-site-blue hover:border-transparent ease-in-out duration-300 px-2.5 rounded-sm">
                  see more
                </button>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          className="mr-1 pr-1 text-site-blue/25 hover:text-site-blue/75 cursor-pointer"
          onClick={slideRight}
          size={50}
        />
      </div>
      <div className="bg-site-cream/50 shadow-inner py-6 -inset-y-2 pt-2 mt-4"></div>

      <Footer />
    </>
  );
};

export default Dashboard;
