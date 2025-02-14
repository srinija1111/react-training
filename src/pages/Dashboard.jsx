import React, { useState } from "react";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    address: "",
    file: null,
    country: ""
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value
    });
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="form-container" style={{ width: "300px", padding: "20px", border: "2px solid black" }}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        
        <div className="gender-container" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label>Gender:</label>
          <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
          <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
          <input type="radio" name="gender" value="other" onChange={handleChange} /> Other
        </div>
        
        <textarea name="address" placeholder="Address" onChange={handleChange}></textarea>
        
        <div className="file-input" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label>File:</label>
          <input type="file" name="file" onChange={handleChange} />
        </div>
      </div>
      
      <br />
      
      <select name="country" onChange={handleChange}>
        <option value="">Country</option>
        <option value="USA">USA</option>
        <option value="India">India</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
      </select>
    </div>
  );
};

export default Dashboard;
