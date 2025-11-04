// export const addCasestudyAPI = async (formData) => {
//   const response = await axios.post("/your-api-endpoint", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   return response.data;
// };

export const addCasestudyAPI = async (formData) => {
    
    const userData = JSON.parse(localStorage.getItem("user"));

const token =userData.token

  
    if (!token) {
      throw new Error("User not authenticated!");
    }

    const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_API_URL+"api/casestudy", {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData
    });
  
    if (!response.status) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add Casestudy");
    }
  
    return response.json();
  };
  

  export async function getCasestudyTableData(filter) {
    // Fake delay
    await new Promise((resolve) => setTimeout(resolve, 10));
    
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_API_URL+"api/casestudy?limit="+filter.limit+"&skip="+filter.page); // Replace with actual API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of an error
    }
  }


  export const deleteCasestudyAPI = async (id: string) => {
    // const token = localStorage.getItem("token"); // 🔹 Retrieve token


    // const token =process.env.NEXT_PUBLIC_TOKEN;
    const userData = JSON.parse(localStorage.getItem("user"));

const token =userData.token
    if (!token) {
      throw new Error("User not authenticated!");
    }
  
    const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_API_URL+`api/casestudy/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete Casestudy");
    }
  
    return response.json();
  };


  
  

  export const getCasestudyById = async (id: string) => {
    
    const userData = JSON.parse(localStorage.getItem("user"));
const token =userData.token
    if (!token) {
      throw new Error("User not authenticated!");
    }
  
    const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_API_URL+`api/casestudy/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify({ id }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to get Casestudy");
    }
  
    return response.json();
  };


  export const updateCasestudyAPI = async (id,casestudy) => {
    const userData = JSON.parse(localStorage.getItem("user"));
const token =userData.token

  
    if (!token) {
      throw new Error("User not authenticated!");
    }
 
    const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_API_URL+`api/casestudy/${id}`, {
      method: "PUT",
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: casestudy,
    });
  
    if (!response.status) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add Casestudy");
    }
  
    return response.json();
  };