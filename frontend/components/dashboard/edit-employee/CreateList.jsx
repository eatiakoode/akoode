"use client"; 

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getEmployeeById, updateEmployeeAPI } from "../../../api/employee";
import { toast } from 'react-toastify';


const CreateList = () => {
  const params = useParams();
  
    const id = params?.id;
  
    const router = useRouter();
    const [employee, setEmployee] = useState({ 
      name: "", 
      designation: "", 
      email: "", 
      status: true 
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    useEffect(() => {
      if (!id) return;
      
      const fetchEmployee = async () => {
        try {
          const data = await getEmployeeById(id);
          if (data.status === 'success' && data.data) {
            setEmployee({ 
              name: data.data.name || "", 
              designation: data.data.designation || "",
              email: data.data.email || "",
              status: data.data.status !== undefined ? data.data.status : true
            });
          }
        } catch (error) {
          console.error("Error fetching Employee:", error);
          setError("Failed to load employee data");
          toast.error("Failed to load employee data");
        } finally {
          setLoading(false);
        }
      };
  
      fetchEmployee();
    }, [id]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Validate all required fields
      if (!employee.name.trim()) {
        setError("Name is required");
        toast.error("Name is required");
        return;
      }
      if (!employee.designation.trim()) {
        setError("Designation is required");
        toast.error("Designation is required");
        return;
      }
      if (!employee.email.trim()) {
        setError("Email is required");
        toast.error("Email is required");
        return;
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(employee.email)) {
        setError("Please enter a valid email address");
        toast.error("Please enter a valid email address");
        return;
      }
      
      setError("");
      
      try {
        const employeeData = {
          name: employee.name.trim(),
          designation: employee.designation.trim(),
          email: employee.email.trim().toLowerCase(),
          status: employee.status,
        };
        
        const data = await updateEmployeeAPI(id, employeeData);
        
        if (data.status === 'success' || data._id) {
          toast.success(data.message || "Employee updated successfully!");
          setTimeout(() => {
            router.push("/akoodeadmin/my-employee");
          }, 1500);
        } else {
          toast.error(data.message || "Failed to update Employee.");
        }
      } catch (error) {
        setError(error.message);
        toast.error(error.message || "Failed to update Employee.");
        console.error(error);
      }
    };
  
    const handleChange = (e) => {
      setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleStatusChange = () => {
      setEmployee((prev) => ({ ...prev, status: !prev.status }));
    };
  
    if (loading) return <div className="text-center p-4"><p>Loading...</p></div>;
    
  return (
    <>
    <form onSubmit={handleSubmit} className="row">
      {error && <div className="col-12"><p className="text-danger">{error}</p></div>}
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="employeeName">Employee Name</label>
          <input
            type="text"
            className="form-control"
            id="employeeName"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="employeeDesignation">Employee Designation</label>
          <input
            type="text"
            className="form-control"
            id="employeeDesignation"
            name="designation"
            value={employee.designation}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="employeeEmail">Employee Email</label>
          <input
            type="email"
            className="form-control"
            id="employeeEmail"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Status</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
            value={employee.status ? "active" : "deactive"}
            onChange={(e) =>
              setEmployee((prev) => ({
                ...prev,
                status: e.target.value === "active",
              }))
            }
          >
            <option value="active">Active</option>
            <option value="deactive">Deactive</option>
          </select>
        </div>
      </div>
      {/* End .col */}

     


      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start" type="button" onClick={() => window.location.href = '/akoodeadmin/my-employee'}>Back</button>
          <button className="btn btn2 float-end">Submit</button>
        </div>
      </div>
      </form>
    </>
  );
};

export default CreateList;
