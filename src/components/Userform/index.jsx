import React, { useState, useEffect } from "react";
import "./index.css";
import RequiredLabel from "../RequiredLabel";

const Userform = ({ handleAddProfile, users, editUser, handleEditUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dob: "",
    address: {
      city: "",
      district: "",
      province: "1",
      country: "Nepal",
    },
  });

  const [validationError, setValidationError] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phoneNumber) {
      setValidationError("Name, email, and phone number are required.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setValidationError("Invalid email format.");
      return;
    }
    if (!validatePhoneNumber(formData.phoneNumber)) {
      setValidationError("Invalid phone number format.");
      return;
    }
    if (editUser) {
      handleEditUser({ ...formData });
    } else {
      handleAddProfile({ ...formData, id: users?.length + 1 });
    }
    setValidationError("");
    resetFormData();
  };
  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      dob: "",
      address: {
        city: "",
        district: "",
        province: "1",
        country: "Nepal",
      },
    });
  };
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phonePattern = /^\d{7,}$/;
    return phonePattern.test(phoneNumber);
  };

  useEffect(() => {
    if (editUser) {
      const userToBeEdited = users?.find((x) => x?.id === editUser);
      setFormData(userToBeEdited);
    }
  }, [editUser]);

  return (
    <div style={{ paddingLeft:"4rem"}}>
      <div
        style={{ fontSize: "1.5rem", fontWeight: "500", marginBottom: "1rem" }}
      >
        User Form
      </div>
      <form style={{width:"100%", marginLeft:"1rem"}} onSubmit={handleSubmit}>
        <div>
          <RequiredLabel labelValue="Name" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <RequiredLabel labelValue="Email" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <RequiredLabel labelValue="Phone number" />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            pattern="[0-9]{7,}"
            required
          />
        </div>
        <div>
          <label>DOB : </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City : </label>
          <input
            type="text"
            name="city"
            value={formData.address.city}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <label>District : </label>
          <input
            type="text"
            name="district"
            value={formData.address.district}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <label>Province : </label>
          <select
            name="province"
            value={formData.address.province}
            onChange={handleAddressChange}
          >
            <option value="1">Province 1</option>
            <option value="2">Province 2</option>
            <option value="3">Province 3</option>
            <option value="4">Province 4</option>
            <option value="5">Province 5</option>
            <option value="6">Province 6</option>
            <option value="7">Province 7</option>
          </select>
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.address.country}
            onChange={handleAddressChange}
            disabled
          />
        </div>
        {validationError && (
          <div className="error-message">{validationError}</div>
        )}
        <div style={{marginTop:"1rem"}}><button type="submit">{!editUser ? "Add User" : "Edit User"}</button></div>
        
      </form>
    </div>
  );
};

export default Userform;
