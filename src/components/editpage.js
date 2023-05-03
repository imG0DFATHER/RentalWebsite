import React, { useState, useEffect } from 'react';

const EditProfilePage = () => {
    const [details, setDetails] = useState({});
    const [originalDetails, setOriginalDetails] = useState({});
    const [user, setUser] = useState([]);
    const [countries, setCountries] = useState([
        'India',
        'America',
        'Canada',
        'UK'
    ]);

    const userLogin = JSON.parse(localStorage.getItem('user_login'));

    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem('user'));
        console.log(userDetails)
        setUser(userDetails);
        setOriginalDetails(userDetails);
        const details = JSON.parse(localStorage.getItem('details'));
        setDetails({});
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDetails((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSave = () => {
        console.log(userLogin);
        user.forEach(User => {

            if (User['email'] == userLogin[0].email) {
                User['name'] = details.name
                User['password'] = details.password
            } else {
                // console.log('yongopongo')
            }
        })
        localStorage.setItem('details', JSON.stringify(details));
        // localStorage.setItem('user', JSON.stringify({ ...user, ...details }));
        localStorage.setItem('user', JSON.stringify(user));
    };


    const handleCancel = () => {
        setDetails(originalDetails);

    };

    return (
        <div>
            <h1>Edit Profile</h1>
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={details.name || user.name}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                {/* <label>
                    Email:
                    <input
                        type="hidden"
                        name="email"
                        value={details.email || user.email}
                    />
                </label>
                <br /> */}
                <label>
                    Bio:
                    <textarea
                        name="bio"
                        value={details.bio || user.bio}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Mobile Number:
                    <input
                        type="text"
                        name="mobile"
                        value={details.mobile || user.mobile}
                        onChange={handleInputChange}
                        pattern="[0-9]{10}"
                        maxLength="10"
                    />
                </label>
                <br />
                <label>
                    Country:
                    <select name="country" value={details.country} onChange={handleInputChange}>
                        <option value="">--Select--</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Street Address:
                    <input
                        type="text"
                        name="address"
                        value={details.address}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    City:
                    <input
                        type="text"
                        name="city"
                        value={details.city}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    State:
                    <input
                        type="text"
                        name="state"
                        value={details.state}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Pincode:
                    <input
                        type="text"
                        name="pincode"
                        value={details.pincode}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={details.password || user.password}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button type="button" onClick={handleSave}>
                    Save</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};
export default EditProfilePage;