// import React from "react";
// import Header from "./Header";
// import { useEffect, useState } from "react";

// const ListedItems = () => {
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
//       const data = await res.json();
//       console.log(data._id);
//       setUser_Id(data._id);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchItem = async () => {
//     console.log("dusra GET for items");
//     try {
//       console.log("thoda andr");
//       const res = await fetch("http://localhost:7000/readitem/", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json; charset=UTF-8",
//         },
//         credentials: "include",
//       });
//       const item = await res.json();
//       console.log(item);
//       console.log("ekdum andr");
//       //   console.log(data.itemName);
//       //   setUser_Id(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     userId();
//     // fetchItem();
//   }, []);

//   return (
//     <>
//       <Header />
//       <div>ListedItems Page</div>
//       <h1>{user_Id}</h1>
//       <button
//         className="rounded-xl shadow-lg bg-slate-600 text-white w-32"
//         onClick={fetchItem}
//       >
//         Fetch
//       </button>
//       <h1>{}</h1>
//     </>
//   );
// };

// export default ListedItems;

import React, { useState, useEffect } from "react";
import Header from "./Header";

const ItemList = () => {
  const [items, setItems] = useState([]);

  const fetchItem = async () => {
    console.log("dusra GET for items");
    try {
      console.log("thoda andr");
      const res = await fetch("http://localhost:7000/readitem/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        credentials: "include",
      });
      const item = await res.json();
      console.log(item);
      console.log("ekdum andr");
      //   console.log(data.itemName);
      //   setUser_Id(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch the user's items from the backend API
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:7000/readitem/"); // Replace with your backend API route
      const data = await response.json();
      setItems(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (itemId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await fetch(`/api/items/${itemId}`, { method: "DELETE" }); // Replace with your backend API route
        // Remove the deleted item from the local state
        setItems(items.filter((item) => item._id !== itemId));
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto font-link">
        <h1 className="text-2xl font-bold mt-4 mb-4">My Items</h1>
        {items.length === 0 ? (
          <p>No items found.</p>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
            {items.map((item) => (
              <div
                key={item._id}
                className="bg-white p-4 rounded shadow-md flex items-center justify-between"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{item.itemName}</h3>
                    <p>{item.about}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor={`toggle-${item._id}`} className="mr-2">
                    Active
                  </label>
                  <input
                    type="checkbox"
                    id={`toggle-${item._id}`}
                    className="form-toggle h-4 w-8"
                    checked={item.active}
                    readOnly
                  />
                  <button
                    className="bg-site-blue hover:bg-site-blue/80 text-white font-bold py-2 px-4 rounded ml-4 shadow-md"
                    //   onClick={() => handleUpdate(item._id)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-white  text-black font-bold py-2 px-4 rounded ml-4 shadow-md"
                    //   onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center mt-4 mb-8">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add Item
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemList;
