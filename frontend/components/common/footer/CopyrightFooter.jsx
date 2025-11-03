'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { getCategoryTableData } from "@/api/frontend/category";

const CopyrightFooter = () => {
  const [categories, setCategories] = useState([]);
      
      const fetchCategories = async () => {
        try {
          const response = await getCategoryTableData();
    
          setCategories(response || []);
        } catch (err) {
          console.error("Error fetching Category:", err);
        }
      };
    
      // ();
    useEffect(() => {
            fetchCategories();
          
        }, []);
 
  

  return (
    <>
    <div className="space60"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className="vl-copyright-area">
              <p>© Copyright 2025 - Akoode. All Right Reserved</p>
            </div>
          </div>
        </div>
        </>
  );
};

export default CopyrightFooter;
