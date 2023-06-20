import Header from "./Header";
import React, { useState, useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const AddItemForm = () => {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [ratePerDay, setRatePerDay] = useState("");
  const [ratePerWeek, setRatePerWeek] = useState("");
  const [ratePerMonth, setRatePerMonth] = useState("");
  const [image, setImage] = useState(null);
  const [about, setAbout] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [securityMoney, setSecurityMoney] = useState("");

  const [user_Id, setUser_Id] = useState("");

  const userId = async () => {
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
      // console.log(res);
      const data = await res.json();
      console.log("fetching id");
      console.log(data._id);
      setUser_Id(data._id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userId();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(itemName);

    // POST request using fetch()
    const res = await fetch("http://localhost:7000/additem", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        itemName,
        category,
        ratePerDay,
        ratePerWeek,
        ratePerMonth,
        about,
        quantity,
        location,
        securityMoney,
        user_Id,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await res.json();

    if (data.status === 401 || !data) {
      window.alert("Item Listing Unsuccessful");
      console.log("Item Listing Unsuccessful");
    } else {
      window.alert("Item Listing Successful");
      console.log("Item Listing Successful");
    }
  };

  const handleCancel = () => {
    resetForm();
  };

  const resetForm = () => {
    setItemName("");
    setCategory("");
    setRatePerDay("");
    setRatePerWeek("");
    setRatePerMonth("");
    setImage(null);
    setAbout("");
    setQuantity("");
    setLocation("");
    setSecurityMoney("");
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="space-y-12 ml-16 mt-12 mr-16">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="flex justify-center font-semibold leading-7 text-2xl text-gray-900">
              Add Item
            </h1>
            {/* <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you share.
            </p> */}
            <div className="grid grid-cols-1">
              <div className="sm:col-span-3">
                <label
                  className="block text-sm font-medium mt-4 leading-6 text-gray-900"
                  htmlFor="itemName"
                >
                  Name of item:
                </label>
                <div className="mt-2">
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    id="itemName"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <br />

            <div className="col-span-full">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="about"
              >
                About the item:
              </label>
              <div className="mt-2">
                <textarea
                  className="block  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  id="about"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Describe your item in detail.
              </p>
            </div>
            <br />

            <div className="col-span-full">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="location"
              >
                Location:
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <br />

            <div className="col-span-full">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="image"
              >
                Image upload:
              </label>
              {/* <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" /> */}
              <input
                className="mt-2 rounded-md bg-white px-2.5 py-1.5 text-sm font-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <br />

            <div className="lg:flex lg:flex-row sm:grid sm:grid-cols-6 mt-3 gap-x-6 gap-y-3">
              <div className="basis-1/3 sm:col-span-2 sm:col-start-1">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="category"
                >
                  Category:
                </label>
                <div className="mt-2">
                  <select
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="Electronics">Lenses</option>
                    <option value="Camera">Cameras</option>
                    <option value="Appliances">Appliances</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Drones">Drones</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Instruments">Instruments</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Projectors">Projectors</option>
                    <option value="Vehicles">Vehicles</option>
                  </select>
                </div>
              </div>
              <br />

              <div className="basis-1/3 sm:col-span-2">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="quantity"
                >
                  Quantity:
                </label>
                <div className="mt-2">
                  <input
                    className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                  />
                </div>
              </div>
              <br />

              <div className="basis-1/3 sm:col-span-2">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="securityMoney"
                >
                  Security money:
                </label>
                <div className="mt-2">
                  <input
                    className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="number"
                    id="securityMoney"
                    value={securityMoney}
                    onChange={(e) => setSecurityMoney(e.target.value)}
                  />
                </div>
              </div>
              <br />
            </div>

            {/* <div className="border-b border-gray-900/10 pb-12"> */}
            <div className="mt-4 lg:flex lg:flex-row sm:grid sm:grid-cols-6 gap-x-6 gap-y-3">
              <div className="basis-1/3 sm:col-span-2 sm:col-start-1">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="ratePerDay"
                >
                  Rate per day:
                </label>
                <div className="mt-2">
                  <input
                    className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="number"
                    id="ratePerDay"
                    value={ratePerDay}
                    onChange={(e) => setRatePerDay(e.target.value)}
                  />
                </div>
              </div>
              <br />

              <div className="basis-1/3 sm:col-span-2">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="ratePerWeek"
                >
                  Rate per week:
                </label>
                <div className="mt-2">
                  <input
                    className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="number"
                    id="ratePerWeek"
                    value={ratePerWeek}
                    onChange={(e) => setRatePerWeek(e.target.value)}
                  />
                </div>
              </div>
              <br />

              <div className="basis-1/3 sm:col-span-2">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="ratePerMonth"
                >
                  Rate per month:
                </label>
                <div className="mt-2">
                  <input
                    className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="number"
                    id="ratePerMonth"
                    value={ratePerMonth}
                    onChange={(e) => setRatePerMonth(e.target.value)}
                  />
                </div>
              </div>
              <br />
            </div>
            {/* </div> */}

            <div className="mt-6 mb-8 flex items-center justify-start gap-x-6">
              <button
                className="text-sm font-semibold leading-6 text-gray-900"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-site-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddItemForm;

// import Header from "./Header";
// import React, { useState, useEffect } from "react";
// import { UserCircleIcon } from "@heroicons/react/24/solid";
// import { useNavigate } from "react-router-dom";

// const AddItemForm = () => {
//   const [itemName, setItemName] = useState("");
//   const [category, setCategory] = useState("Electronics");
//   const [ratePerDay, setRatePerDay] = useState("");
//   const [ratePerWeek, setRatePerWeek] = useState("");
//   const [ratePerMonth, setRatePerMonth] = useState("");
//   const [image, setImage] = useState(null);
//   const [about, setAbout] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [location, setLocation] = useState("");
//   const [securityMoney, setSecurityMoney] = useState("");

//   // const [inpval, setInpval] = useState({
//   //   itemName: '',
//   //   category: '',
//   //   ratePerDay: '',
//   //   ratePerWeek: '',
//   //   ratePerMonth: '',
//   //   mobile: '',
//   //   about: '',
//   //   quantity: '',
//   //   location: '',
//   //   securityMoney: '',
//   // });

//   const [user_Id, setUser_Id] = useState("");

//   const userId = async () => {
//     try {
//       const res = await fetch("http://localhost:7000/about/", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json; charset=UTF-8",
//         },
//         credentials: "include",
//       });
//       console.log("before");
//       // debugger;
//       // console.log(res);
//       const data = await res.json();
//       console.log("fetching id");
//       console.log(data._id);
//       setUser_Id(data._id);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     userId();
//   }, []);

//   // const getdata = (e) => {

//   //   const { value, name } = e.target;

//   //   setInpval(() => {
//   //     return {
//   //       ...inpval,
//   //       [name]: value,
//   //     };
//   //   });
//   // };

//   const addData = async (e) => {
//     e.preventDefault();

//     const { name, email, password, password_confirmation } = inpval;
//     console.log(email);

//     // POST request using fetch()
//     const res = await fetch("http://localhost:7000/signup", {

//       // Adding method type
//       method: "POST",

//       // Adding body or contents to send
//       body: JSON.stringify({
//         username: name,
//         email: email,
//         password: password,
//         cpassword: password_confirmation
//       }),

//       // Adding headers to the request
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     })

//     const data = await res.json();

//     if (data.status === 422 || !data) {
//       window.alert('Invalid Registration')
//       console.log('Invalid Registration')
//     } else {
//       window.alert('Registration Successful')
//       console.log('Successful Registration')

//       history('/login');
//     }
//   };

//   const handleCancel = () => {
//     resetForm();
//   };

//   const resetForm = () => {
//     setItemName("");
//     setCategory("Electronics");
//     setRatePerDay("");
//     setRatePerWeek("");
//     setRatePerMonth("");
//     setImage(null);
//     setAbout("");
//     setQuantity("");
//     setLocation("");
//     setSecurityMoney("");
//   };

//   return (
//     <>
//       <Header />
//       <form onSubmit={handleSubmit}>
//         <div className="space-y-12 ml-16 mt-12 mr-16">
//           <div className="border-b border-gray-900/10 pb-12">
//             <h1 className="flex justify-center font-semibold leading-7 text-2xl text-gray-900">
//               Add Item
//             </h1>
//             <div className="grid grid-cols-1">
//               <div className="sm:col-span-3">
//                 <label
//                   className="block text-sm font-medium mt-4 leading-6 text-gray-900"
//                   htmlFor="itemName"
//                 >
//                   Name of item:
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     type="text"
//                     id="itemName"
//                     value={itemName}
//                     onChange={getdata}                    required
//                   />
//                 </div>
//               </div>
//             </div>
//             <br />

//             <div className="col-span-full">
//               <label
//                 className="block text-sm font-medium leading-6 text-gray-900"
//                 htmlFor="about"
//               >
//                 About the item:
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   className="block  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
//                   id="about"
//                   value={about}
//                   onChange={getdata}                ></textarea>
//               </div>
//               <p className="mt-3 text-sm leading-6 text-gray-600">
//                 Describe your item in detail.
//               </p>
//             </div>
//             <br />

//             <div className="col-span-full">
//               <label
//                 className="block text-sm font-medium leading-6 text-gray-900"
//                 htmlFor="location"
//               >
//                 Location:
//               </label>
//               <div className="mt-2">
//                 <input
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   type="text"
//                   id="location"
//                   value={location}
//                   onChange={getdata}                />
//               </div>
//             </div>
//             <br />

//             <div className="col-span-full">
//               <label
//                 className="block text-sm font-medium leading-6 text-gray-900"
//                 htmlFor="image"
//               >
//                 Image upload:
//               </label>
//               {/* <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" /> */}
//               <input
//                 className="mt-2 rounded-md bg-white px-2.5 py-1.5 text-sm font-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                 type="file"
//                 id="image"
//                 // onChange={(e) => setImage(e.target.files[0])}
//               />
//             </div>
//             <br />

//             <div className="lg:flex lg:flex-row sm:grid sm:grid-cols-6 mt-3 gap-x-6 gap-y-3">
//               <div className="basis-1/3 sm:col-span-2 sm:col-start-1">
//                 <label
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                   htmlFor="category"
//                 >
//                   Category:
//                 </label>
//                 <div className="mt-2">
//                   <select
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                     id="category"
//                     value={category}
//                     onChange={getdata}                    required
//                   >
//                     <option value="Electronics">Lenses</option>
//                     <option value="Camera">Cameras</option>
//                     <option value="Appliances">Appliances</option>
//                     <option value="Fitness">Fitness</option>
//                     <option value="Drones">Drones</option>
//                     <option value="Furniture">Furniture</option>
//                     <option value="Instruments">Instruments</option>
//                     <option value="Electronics">Electronics</option>
//                     <option value="Projectors">Projectors</option>
//                     <option value="Vehicles">Vehicles</option>
//                   </select>
//                 </div>
//               </div>
//               <br />

//               <div className="basis-1/3 sm:col-span-2">
//                 <label
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                   htmlFor="quantity"
//                 >
//                   Quantity:
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     type="number"
//                     id="quantity"
//                     value={quantity}
//                     onChange={getdata}                    required
//                   />
//                 </div>
//               </div>
//               <br />

//               <div className="basis-1/3 sm:col-span-2">
//                 <label
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                   htmlFor="securityMoney"
//                 >
//                   Security money:
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     type="number"
//                     id="securityMoney"
//                     value={securityMoney}
//                     onChange={getdata}                  />
//                 </div>
//               </div>
//               <br />
//             </div>

//             {/* <div className="border-b border-gray-900/10 pb-12"> */}
//             <div className="mt-4 lg:flex lg:flex-row sm:grid sm:grid-cols-6 gap-x-6 gap-y-3">
//               <div className="basis-1/3 sm:col-span-2 sm:col-start-1">
//                 <label
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                   htmlFor="ratePerDay"
//                 >
//                   Rate per day:
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     type="number"
//                     id="ratePerDay"
//                     value={ratePerDay}
//                     onChange={getdata}                  />
//                 </div>
//               </div>
//               <br />

//               <div className="basis-1/3 sm:col-span-2">
//                 <label
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                   htmlFor="ratePerWeek"
//                 >
//                   Rate per week:
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     type="number"
//                     id="ratePerWeek"
//                     value={ratePerWeek}
//                     onChange={getdata}                  />
//                 </div>
//               </div>
//               <br />

//               <div className="basis-1/3 sm:col-span-2">
//                 <label
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                   htmlFor="ratePerMonth"
//                 >
//                   Rate per month:
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     type="number"
//                     id="ratePerMonth"
//                     value={ratePerMonth}
//                     onChange={getdata}                  />
//                 </div>
//               </div>
//               <br />
//             </div>
//             {/* </div> */}

//             <div className="mt-6 mb-8 flex items-center justify-start gap-x-6">
//               <button
//                 className="text-sm font-semibold leading-6 text-gray-900"
//                 type="button"
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="rounded-md bg-site-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 type="submit"
//                 onClick={addData}
//               >
//                 Add
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default AddItemForm;
