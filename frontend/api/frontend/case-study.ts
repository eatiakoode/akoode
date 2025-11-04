export async function getCasestudyTableData() {
    // Fake delay
    await new Promise((resolve) => setTimeout(resolve, 10));
    
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FRONTEND_API_URL+"api/casestudy/list", {
        next: { revalidate: 40 } // ISR: update every 60s
      }); // Replace with actual API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of an error
    }
  }
  export async function getCasestudyTableDataFeatured() {
    // Fake delay
    await new Promise((resolve) => setTimeout(resolve, 10));
    
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FRONTEND_API_URL+"api/casestudy/list?featured=true", {
        next: { revalidate: 40 } // ISR: update every 60s
      }); // Replace with actual API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of an error
    }
  }


  export const getCasestudyById = async (id: string) => {
    // const token = localStorage.getItem("token"); // 🔹 Retrieve token


    const token =process.env.NEXT_PUBLIC_TOKEN;
    if (!token) {
      throw new Error("User not authenticated!");
    }
  
    const response = await fetch(process.env.NEXT_PUBLIC_FRONTEND_API_URL+`api/casestudy/byid/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify({ id }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to get casestudy");
    }
  
    return response.json();
  };



  export const  getCasestudyByPropertyIdData = async (id: string) => {
    // Fake delay
    await new Promise((resolve) => setTimeout(resolve, 10));
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FRONTEND_API_URL+`api/casestudy/byproperty/${id}`); // Replace with actual API endpoint
      
      if (!response.ok) {
        throw new Error("Failed to fetch state");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching state:", error);
      return []; // Return an empty array in case of an error
    }
  };

  