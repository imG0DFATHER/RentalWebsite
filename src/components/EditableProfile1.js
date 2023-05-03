import React, { useState, useEffect } from "react";
import Header from "./Header";

const EditableProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [mobile, setMobile] = useState("");
  const [originalName, setOriginalName] = useState("");
  const [originalEmail, setOriginalEmail] = useState("");
  const [originalMobile, setOriginalMobile] = useState("");
  const [originalBio, setOriginalBio] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("user_login[0].name");
    const storedEmail = localStorage.getItem("user_login[0].email");
    const storedMobile = localStorage.getItem("user_login");
    const storedBio = localStorage.getItem("bio");

    if (storedName && storedEmail && storedMobile && storedBio) {
      setName(storedName);
      setEmail(storedEmail);
      setMobile(storedMobile);
      setBio(storedBio);
      setOriginalName(storedName);
      setOriginalEmail(storedEmail);
      setOriginalMobile(storedMobile);
      setOriginalBio(storedBio);
    }
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Store the data in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("bio", bio);

    // Update the original values
    setOriginalName(name);
    setOriginalEmail(email);
    setOriginalMobile(mobile);
    setOriginalBio(bio);
  };

  const handleCancel = () => {
    // Revert to the original values
    setName(originalName);
    setEmail(originalEmail);
    setEmail(originalMobile);
    setBio(originalBio);
  };

  return (
    <>
      < Header />
      <div>
        <h1>HELLO</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Mobile Number:
            <input type="tel" value={mobile} onChange={handleMobileChange} />
          </label>
          <br />
          <label>
            Bio:
            <textarea value={bio} onChange={handleBioChange} />
          </label>
          <br />
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default EditableProfile;