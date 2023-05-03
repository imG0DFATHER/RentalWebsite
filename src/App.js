// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import HomePage from './components/HomePage';

// function App() {
//   return (
//     <>
//       <Header />
//       <HomePage />
//     </>
//   );
// }

// export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Errror from './components/Errror';
import { Routes, Route } from 'react-router-dom';
import EditableProfile from './components/EditableProfile2';
import EditProfilePage from './components/editpage';
import AddItems from './components/AddItem';
import GridOfCards from './components/GridOfCards';
import ItemPage from './components/ItemPage';
import { useState } from 'react';

function App() {
  const [categoryName, setCategoryName] = useState('');
  const [item, setItem] = useState([]);

  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard setCategoryName={setCategoryName} />}
        />
        <Route path="/editprofile" element={<EditableProfile />} />
        <Route path="/edit" element={<EditProfilePage />} />
        <Route path="/additem" element={<AddItems />} />
        <Route
          path="/dashboard/:categoryName"
          element={
            <GridOfCards categoryName={categoryName} setItem={setItem} />
          }
        />
        <Route
          path="/dashboard/:categoryName/:name"
          element={<ItemPage item={item} />}
        />
        <Route path="*" element={<Errror />} />
      </Routes>
    </>
  );
}

export default App;
