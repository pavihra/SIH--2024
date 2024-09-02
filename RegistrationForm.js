import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = ({ onLogout }) => {
  const [formData, setFormData] = useState({
    certificateType: 'Income Certificate',
    name: '',
    age: '',
    address: '',
    phoneNumber: '',
    email: '', // Added new field
    file: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="form-container">
      <button className="logout-button" onClick={onLogout}>Logout</button>
      <h2 className="form-title">Apply for Certification</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Certificate Type</label>
          <select name="certificateType" value={formData.certificateType} onChange={handleChange}>
            <option value="Income Certificate">Income Certificate</option>
            <option value="Birth Certificate">Birth Certificate</option>
            <option value="Caste Certificate">Caste Certificate</option>
          </select>
        </div>

        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Upload File</label>
          <input type="file" onChange={handleFileChange} />
        </div>

        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

