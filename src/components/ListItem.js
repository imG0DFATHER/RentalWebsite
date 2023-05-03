import React, { useState } from 'react';

const AddItemForm = () => {
    const [itemName, setItemName] = useState('');
    const [category, setCategory] = useState('Electronics');
    const [ratePerDay, setRatePerDay] = useState('');
    const [ratePerWeek, setRatePerWeek] = useState('');
    const [ratePerMonth, setRatePerMonth] = useState('');
    const [image, setImage] = useState(null);
    const [about, setAbout] = useState('');
    const [quantity, setQuantity] = useState('');
    const [location, setLocation] = useState('');
    const [securityMoney, setSecurityMoney] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            itemName,
            category,
            ratePerDay,
            ratePerWeek,
            ratePerMonth,
            image,
            about,
            quantity,
            location,
            securityMoney,
        };
        let items = JSON.parse(localStorage.getItem('Items')) || [];
        items.push(newItem);
        localStorage.setItem('Items', JSON.stringify(items));
        resetForm();
    };

    const handleCancel = () => {
        resetForm();
    };

    const resetForm = () => {
        setItemName('');
        setCategory('Electronics');
        setRatePerDay('');
        setRatePerWeek('');
        setRatePerMonth('');
        setImage(null);
        setAbout('');
        setQuantity('');
        setLocation('');
        setSecurityMoney('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="itemName">Name of item:</label>
            <input type="text" id="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
            <br />

            <label htmlFor="category">Category:</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value="Electronics">Electronics</option>
                <option value="Camera">Camera</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Drones">Drones</option>
            </select>
            <br />

            <label htmlFor="ratePerDay">Rate per day:</label>
            <input type="number" id="ratePerDay" value={ratePerDay} onChange={(e) => setRatePerDay(e.target.value)} />
            <br />

            <label htmlFor="ratePerWeek">Rate per week:</label>
            <input type="number" id="ratePerWeek" value={ratePerWeek} onChange={(e) => setRatePerWeek(e.target.value)} />
            <br />

            <label htmlFor="ratePerMonth">Rate per month:</label>
            <input type="number" id="ratePerMonth" value={ratePerMonth} onChange={(e) => setRatePerMonth(e.target.value)} />
            <br />

            <label htmlFor="image">Image upload:</label>
            <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} />
            <br />

            <label htmlFor="about">About the item:</label>
            <textarea id="about" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
            <br />

            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
            <br />

            <label htmlFor="location">Location:</label>
            <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <br />

            <label htmlFor="securityMoney">Security money:</label>
            <input type="number" id="securityMoney" value={securityMoney} onChange={(e) => setSecurityMoney(e.target.value)} />
            <br />

            <div>
                <button type="submit">Add</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default AddItemForm;


