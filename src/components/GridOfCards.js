import Header from './Header';
// import React from 'react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const cards = {
  Cameras: [
    {
      url: 'https://unsplash.com/photos/6qesnUQceJA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8c29ueSUyMGFscGhhJTIwYTdpaWl8ZW58MHx8fHwxNjgyMzkyNDI2&force=true&w=640',
      // url: 'https://unsplash.com/photos/6qesnUQceJA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8c29ueSUyMGFscGhhJTIwYTdpaWl8ZW58MHx8fHwxNjgyMzkyNDI2&force=true&w=1920',
      title: 'Sony Alpha 7iii',
      description: 'Along with 200mm Lens',
      rate: '2500',
      deposit: '2000',
    },
    {
      url: 'https://unsplash.com/photos/JlaHTZ_Rp7M/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8bmlrb24lMjBjYW1lcmF8ZW58MHx8fHwxNjgyNDk1Nzkz&force=true&w=640',
      // url: 'https://unsplash.com/photos/JlaHTZ_Rp7M/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8bmlrb24lMjBjYW1lcmF8ZW58MHx8fHwxNjgyNDk1Nzkz&force=true&w=1920',
      title: 'Nikon Z9',
      description: 'This is the second card',
      rate: '30',
      deposit: '15',
    },
    {
      url: 'https://unsplash.com/photos/rBY_CjoyItM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8bGVpY2F8ZW58MHx8fHwxNjgyNDk1NTcz&force=true&w=640',
      // url: 'https://unsplash.com/photos/rBY_CjoyItM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8bGVpY2F8ZW58MHx8fHwxNjgyNDk1NTcz&force=true&w=1920',
      title: 'Leica M-A',
      description: 'This is the fourth card',
      rate: '30',
      deposit: '15',
    },
    {
      url: 'https://unsplash.com/photos/cwy9yVBBPxg/download?force=true&w=640',
      // url: 'https://unsplash.com/photos/cwy9yVBBPxg/download?force=true&w=1920',
      title: 'Canon EOS R7',
      description: 'This is the third card',
      rate: '30',
      deposit: '15',
    },
    {
      url: 'https://unsplash.com/photos/KjQcHsOG_mk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8c29ueSUyMGNhbWVyYXxlbnwwfHx8fDE2ODI1MDM0MjI&force=true&w=640',
      // url: 'https://unsplash.com/photos/KjQcHsOG_mk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8c29ueSUyMGNhbWVyYXxlbnwwfHx8fDE2ODI1MDM0MjI&force=true&w=1920',
      title: 'Sony A7R IV',
      description: 'This is the fourth card',
      rate: '30',
      deposit: '15',
    },
    {
      url: 'https://unsplash.com/photos/6wATIYdLd08/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjF8fGNhbm9uJTIwZW9zJTIwY2FtZXJhfGVufDB8fHx8MTY4MjQ5NTY5Nw&force=true&w=640',
      // url: 'https://unsplash.com/photos/6wATIYdLd08/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjF8fGNhbm9uJTIwZW9zJTIwY2FtZXJhfGVufDB8fHx8MTY4MjQ5NTY5Nw&force=true&w=1920',
      title: 'Canon EOS 77D',
      description: 'This is the fourth card',
      rate: '30',
      deposit: '15',
    },
    {
      url: 'https://unsplash.com/photos/lUvS51FhBtI/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTV8fGZ1amklMjB4dDQlMjBjYW1lcmF8ZW58MHx8fHwxNjgyNTAxOTc0&force=true&w=640',
      // url: 'https://unsplash.com/photos/lUvS51FhBtI/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTV8fGZ1amklMjB4dDQlMjBjYW1lcmF8ZW58MHx8fHwxNjgyNTAxOTc0&force=true&w=1920',
      title: 'Fujifilm X-T5',
      description: 'This is the fourth card',
      rate: '30',
      deposit: '15',
    },
    {
      url: 'https://unsplash.com/photos/nEdSXBx60WQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjF8fG5pa29uJTIwY2FtZXJhfGVufDB8fHx8MTY4MjQ5NTgwMQ&force=true&w=640',
      // url: 'https://unsplash.com/photos/nEdSXBx60WQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjF8fG5pa29uJTIwY2FtZXJhfGVufDB8fHx8MTY4MjQ5NTgwMQ&force=true&w=1920',
      // url: 'https://unsplash.com/photos/Rux50ySjahc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mjh8fG5pa29uJTIwY2FtZXJhfGVufDB8fHx8MTY4MjQ5NTgwMQ&force=true&w=1920',
      title: 'Nikon Z6 II',
      description: 'This is the fourth card',
      rate: '30',
      deposit: '15',
    },
  ],
  Vehicles: [
    {
      title: 'Vehicle1',
      description: 'This is the first card',
      color: 'bg-red-200',
    },
    {
      title: 'Vehicle2',
      description: 'This is the second card',
      color: 'bg-green-200',
    },
    {
      title: 'Vehicle3',
      description: 'This is the third card',
      color: 'bg-blue-200',
    },
    {
      title: 'Vehicle3',
      description: 'This is the third card',
      color: 'bg-blue-200',
    },
    {
      title: 'Vehicle3',
      description: 'This is the third card',
      color: 'bg-blue-200',
    },
    {
      title: 'Vehicle3',
      description: 'This is the third card',
      color: 'bg-blue-200',
    },
    {
      title: 'Vehicle3',
      description: 'This is the third card',
      color: 'bg-blue-200',
    },
    {
      title: 'Vehicle3',
      description: 'This is the third card',
      color: 'bg-blue-200',
    },
  ],
};

const GridOfCards = (props) => {
  //   const items = JSON.parse(localStorage.getItem('Items')) || [];
  const [data, setData] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    // const [a, setA] = useState
    setData(cards[props.categoryName]);
  }, []);

  const handleClick = (event, item) => {
    props.setItem(item);
    history(`/dashboard/${props.categoryName}/${item.title}`);
  };

  return (
    <>
      <Header />
      <div className='font-link mt-4 ml-20'>
        <h2 className='text-site-blue/90 font-semibold'>{props.categoryName}</h2>
      </div>
      {/* <hr className='w-40 ml-20' /> */}
      <div className="w-56 h-0.5 bg-gradient-to-r from-site-blue to-sky-300 my-1 ml-20 border border-blue-300 rounded md:my-10 ">
      </div>
      <div className="ml-16 mt-4 mb-14 mr-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-md bg-white shadow-md border-1 border-site-blue/40 cursor-pointer hover:scale-105 hover:shadow-xl ease-in-out duration-300"
            onClick={(event) => handleClick(event, item)}
          >
            <div>
              <img
                className="w-full inline-block mb-3 rounded-t-md cursor-pointer"
                // hover:scale-105 ease-in-out duration-300
                src={item.url}
                alt="/"
              />
            </div>

            <div className='flex flex-row justify-between'>

              <div className='flex flex-col'>
                <div className="font-link text-lg font-medium ml-4">{item.title}</div>
                <p className="text-site-blue/50 text-xs font-link mb-3 ml-4 mt-1">{item.description}</p>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mt-1 mr-4 w-5 h-5 hover:fill-red-500 hover:stroke-red-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>

            <hr className='ml-4 mr-4 text-site-blue/50' />
            <div className="font-link list-none border-l-site-blue pl-0 mt-3 mb-3 ml-4">
              {/* <li className="text-gray-700">Location: {item.location}</li>
                            <li className="text-gray-700">Quantity: {item.quantity}</li> */}

              <div className='flex flex-row justify-between'>
                <div className='flex flex-col'>
                  <div className='text-base'> Rate: </div>
                  <div className="text-site-blue/80 text-xs font-link">₹ {item.rate}/day</div>
                  {/* <li className="text-gray-700">Rate per week: {item.ratePerWeek}</li> */}
                  <div className="text-site-blue/80 text-xs font-link">₹ {item.deposit}/week</div>
                  {/* <li className="text-gray-700">Security money: {item.deposit}</li> */}
                </div>

                <div className='mt-9 pt-0.5 mr-3 flex flex-row'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-4 h-4 fill-yellow-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-4 h-4 fill-yellow-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-4 h-4 fill-yellow-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-4 h-4 fill-yellow-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GridOfCards;