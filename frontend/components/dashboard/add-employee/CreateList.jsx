"use client";

import { useState } from "react";
import { addEmployeeAPI } from "../../../api/employee.ts";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
const CreateList = () => {
   const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
  
    const handleNameChange = (e) => {
      setName(e.target.value);
  
      // ✅ Clear the error when user starts typing
      if (e.target.value.trim() !== "") {
        setError("");
      }
    };
     const handleDesignationChange = (e) => {
      setDesignation(e.target.value);
  
      // ✅ Clear the error when user starts typing
      if (e.target.value.trim() !== "") {
        setError("");
      }
    };
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
  
      // ✅ Clear the error when user starts typing
      if (e.target.value.trim() !== "") {
        setError("");
      }
    };

    const addEmployee = async (e) => {
      e.preventDefault();
  
      // Validate all required fields
      if (!name.trim()) {
        setError("Name is required");
        toast.error("Name is required");
        return;
      }
      if (!designation.trim()) {
        setError("Designation is required");
        toast.error("Designation is required");
        return;
      }
      if (!email.trim()) {
        setError("Email is required");
        toast.error("Email is required");
        return;
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address");
        toast.error("Please enter a valid email address");
        return;
      }
      
      setError("");
      
      try {
        const employeeData = {
          name: name.trim(),
          designation: designation.trim(),
          email: email.trim().toLowerCase(),
          status: true, // Default status
        };
        
        const data = await addEmployeeAPI(employeeData);
       
        if (data.status === 'success') {
          toast.success(data.message || 'Employee added successfully!');
          // Reset all fields
          setName("");
          setDesignation("");
          setEmail("");
          // Redirect after showing toast
          setTimeout(() => {
            router.push("/akoodeadmin/my-employee");
          }, 1500);
        } else {
          toast.error(data.message || 'Failed to add employee');
        }
      } catch (error) {
        setError(error.message);
        toast.error(error.message || 'Failed to add employee');
      }
    };
  return (
    <>
    <form onSubmit={addEmployee} className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="employeeName">Employee Name</label>
          <input type="text" className="form-control" id="employeeName" value={name} onChange={handleNameChange} />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="employeeDesignation">Employee Designation</label>
          <input type="text" className="form-control" id="employeeDesignation" value={designation} onChange={handleDesignationChange} />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="employeeEmail">Employee Email</label>
          <input type="email" className="form-control" id="employeeEmail" value={email} onChange={handleEmailChange} />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6 d-none">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Status</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="1">Active</option>
            <option data-tokens="2">Deactive</option>
          </select>
        </div>
      </div>
      {/* End .col */}

     


      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start" type="button" onClick={() => router.push('/akoodeadmin/my-employee')}>Back</button>
          <button type="submit" className="btn btn2 float-end">Submit</button>
        </div>
      </div>
      </form>
    </>
  );
};

export default CreateList;
