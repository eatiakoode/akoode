export const addJobEnquiryAPI = async (title: string) => {
  const userData = JSON.parse(localStorage.getItem("user"));
const token =userData.token


  if (!token) {
    throw new Error("User not authenticated!");
  }

  

  const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_API_URL+"api/jobenquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title }),
  });

  if (!response.status) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to add JobEnquiry");
  }

  return response.json();
};


export async function getJobEnquiryTableData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 10));
  

  try {
   const response = await fetch(
        process.env.NEXT_PUBLIC_ADMIN_API_URL + "api/jobenquiry",
        {
          next: { revalidate: 60 }
        }
      );
 // Replace with actual API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array in case of an error
  }
}


export const deleteJobEnquiryAPI = async (id: string) => {
  const userData = JSON.parse(localStorage.getItem("user"));
const token =userData.token
  if (!token) {
    throw new Error("User not authenticated!");
  }

  const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_API_URL+`api/jobenquiry/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to delete JobEnquiry");
  }

  return response.json();
};





export const getJobEnquiryById = async (id: string) => {
  const userData = JSON.parse(localStorage.getItem("user"));
const token =userData.token
  if (!token) {
    throw new Error("User not authenticated!");
  }

  const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_API_URL+`api/jobenquiry/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to get JobEnquiry");
  }

  return response.json();
};


export const updateJobEnquiryAPI = async (id,jobenquiry) => {
  const userData = JSON.parse(localStorage.getItem("user"));
const token =userData.token


  if (!token) {
    throw new Error("User not authenticated!");
  }

  const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_API_URL+`api/jobenquiry/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(jobenquiry),
  });

  if (!response.status) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to add JobEnquiry");
  }

  return response.json();
};