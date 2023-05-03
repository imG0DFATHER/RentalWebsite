
// single field change in user when pressed SAVE

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Header from "./Header";

const EditProfilePage = () => {
    const [details, setDetails] = useState({
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

    const [showAlert, setShowAlert] = useState(false);
    const [originalDetails, setOriginalDetails] = useState({});
    const [user, setUser] = useState([]);
    // const [name, setName] = useState("");
    const [countries, setCountries] = useState([
        'India',
        'America',
        'Canada',
        'UK'
    ]);

    const history = useNavigate();
    const userLogin = JSON.parse(localStorage.getItem('user_login'));

    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem('user'));
        const data = JSON.parse(localStorage.getItem('user_login'))
        console.log(data)
        console.log(userDetails)
        setDetails({
            name: data[0].name,
            email: '',
            password: data[0].email,
            password_confirmation: '',
            bio: data[0].bio,
            mobile: data[0].mobile,
            country: data[0].country,
            address: data[0].address,
            city: data[0].city,
            state: data[0].state,
            pincode: data[0].pincode
        })
        setUser(userDetails);
        setOriginalDetails(userDetails);
        // setName(data[0].name);
        // const details = JSON.parse(localStorage.getItem('details'));
        // setDetails({});
        let timer;
        if (showAlert) {
            timer = setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        }
        return () => clearTimeout(timer);
    }, [showAlert]);
    // }, []);

    // setInpval(() => {
    //     return {
    //         ...inpval,
    //         [name]: value,
    //     };
    // });

    const handleInputChange = (event) => {
        console.log(event);
        const { id, value } = event.target;
        console.log(id);

        if (id == 'name') {
            setDetails((prevState) => ({ ...prevState, name: value }));
        } else if (id == 'bio') {
            setDetails((prevState) => ({ ...prevState, bio: value }));
        } else if (id == 'mobile') {
            setDetails((prevState) => ({ ...prevState, mobile: value }));
        } else if (id == 'country') {
            setDetails((prevState) => ({ ...prevState, country: value }));
        } else if (id == 'address') {
            setDetails((prevState) => ({ ...prevState, address: value }));
        } else if (id == 'city') {
            setDetails((prevState) => ({ ...prevState, city: value }));
        } else if (id == 'state') {
            setDetails((prevState) => ({ ...prevState, state: value }));
        } else if (id == 'pincode') {
            setDetails((prevState) => ({ ...prevState, pincode: value }));

        }

    };

    const handleSave = () => {
        console.log(userLogin);
        user.forEach(User => {

            if (User['email'] == userLogin[0].email) {

                User['address'] = details.address
                User['bio'] = details.bio
                User['city'] = details.city
                User['country'] = details.country
                User['mobile'] = details.mobile
                User['name'] = details.name
                User['pincode'] = details.pincode
                User['state'] = details.state
                // User['password'] = details.password
                //
                userLogin[0].address = details.address
                userLogin[0].bio = details.bio
                userLogin[0].city = details.city
                userLogin[0].country = details.country
                userLogin[0].mobile = details.mobile
                userLogin[0].name = details.name
                userLogin[0].pincode = details.pincode
                userLogin[0].state = details.state
                // User['password'] = details.password

                localStorage.setItem('user_login', JSON.stringify(userLogin))
            }

        })
        // localStorage.setItem('details', JSON.stringify(details));
        // localStorage.setItem('user', JSON.stringify({ ...user, ...details }));
        localStorage.setItem('user', JSON.stringify(user));
        setShowAlert(true);
    };


    const handleCancel = () => {
        setDetails(originalDetails);
        history("/dashboard");
    };

    return (
        <>
            <Header />

            <form>
                <div className="space-y-12 ml-16 mt-12 mr-16">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            This information will be displayed publicly so be careful what you share.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md ring-gray-300 sm:max-w-md">
                                        {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={details.name}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        // autoComplete="username"
                                        // placeholder="krish"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    About
                                </label>
                                <div className="mt-2">
                                    {/* <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"> */}
                                    <textarea
                                        id="bio"
                                        name="bio"
                                        value={details.bio}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="block  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                    {/* </div> */}
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Profile Pic
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <button
                                        type="button"
                                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        Change
                                    </button>
                                </div>
                            </div>

                            {/* <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                                        <input
                                            type="password"
                                            name="password"
                                            value={details.password || user.password}
                                            onChange={handleInputChange}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            required
                                        />
                                    </div>
                                </div>
                            </div> */}


                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                        {/* <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div> */}

                            <div className="sm:col-span-2">
                                <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mobile Number
                                </label>
                                <div className="mt-2">
                                    {/* <div className="flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-900 sm:max-w-md"> */}
                                    <input
                                        id="mobile"
                                        name="mobile"
                                        type="tel"
                                        value={details.mobile}
                                        onChange={handleInputChange}
                                        pattern="[0-9]{10}"
                                        maxLength="10"
                                        className="block w-full py-1.5 border-0 rounded-md border-transparent focus:outline-none focus:ring-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {/* </div> */}
                                </div>
                            </div>

                            {/* <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div> */}

                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                    Country
                                </label>
                                <div className="mt-2">
                                    {/* <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select> */}

                                    <select
                                        id="country"
                                        name="country"
                                        value={details.country}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option value="">--Select--</option>
                                        {countries.map((country) => (
                                            <option key={country} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="address"
                                        type="text"
                                        name="address"
                                        value={details.address}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="city"
                                        type="text"
                                        name="city"
                                        value={details.city}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                    State / Province
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="state"
                                        type="text"
                                        name="state"
                                        value={details.state}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                    ZIP / Postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="pincode"
                                        type="text"
                                        name="pincode"
                                        value={details.pincode}
                                        onChange={handleInputChange}
                                        // autoComplete="postal-code"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 ml-20 mb-8 flex items-center justify-start gap-x-6">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleSave}
                        className="rounded-md bg-site-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
            {showAlert && (
                <div className="alert rounded-lg shadow-sm" onClick={() => setShowAlert(false)}>
                    <div className="flex flex-row content">
                        <h5>Details updated successfully!</h5>
                        {/* <button className="close-btn text-xl">&times;</button> */}
                    </div>
                </div>
            )}
        </>

    );
};
export default EditProfilePage;
