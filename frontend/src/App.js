// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [form, setForm] = useState({ employeeName: "", leaveDate: "", reason: "", leaveType: "casual" });
  const [leaves, setLeaves] = useState([]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/leaves', form);
    fetchLeaves();
    setForm({ employeeName: "", leaveDate: "", reason: "", leaveType: "casual" });
  };

  const fetchLeaves = async () => {
    const res = await axios.get('http://localhost:5000/api/leaves');
    setLeaves(res.data);
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  return (
    <div>
      <h1>Leave Application Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input name="employeeName" value={form.employeeName} onChange={handleChange} placeholder="Name" required />
        <input type="date" name="leaveDate" value={form.leaveDate} onChange={handleChange} required />
        <input name="reason" value={form.reason} onChange={handleChange} placeholder="Reason" required />
        <select name="leaveType" value={form.leaveType} onChange={handleChange} required>
          <option value="casual">Casual</option>
          <option value="sick">Sick</option>
          <option value="earned">Earned</option>
          <option value="unpaid">Unpaid</option>
        </select>
        <button type="submit">Submit Leave</button>
      </form>

      <h2>Leave Applications</h2>
      <ul>
        {leaves.map(leave => (
          <li key={leave._id}>
            {leave.employeeName} | {leave.leaveDate.slice(0, 10)} | {leave.reason} | {leave.leaveType}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
