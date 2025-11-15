 export async function getBlogTableData(page: number = 1, limit: number = 6) {
    // Fake delay
    await new Promise((resolve) => setTimeout(resolve, 10));
    
  
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FRONTEND_API_URL}api/blog/list?page=${page}&limit=${limit}`,
        { next: { revalidate: 60 } }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch blog");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching blog:", error);
      return { blogs: [], pagination: null }; // Return empty structure in case of an error
    }
  }


  export const getBlogById = async (id: string) => {
  
    const response = await fetch(process.env.NEXT_PUBLIC_FRONTEND_API_URL+`api/blog/byid/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify({ id }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to get blog");
    }
  
    return response.json();
  };
  export const getBlogBySlug = async (id: string) => {
  
    const response = await fetch(process.env.NEXT_PUBLIC_FRONTEND_API_URL+`api/blog/slug/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      cache: "no-store"
      // body: JSON.stringify({ id }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to get blog");
    }
  
    return response.json();
  };

  export const getRelatedBlogs = async (id: string, limit: number = 3) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FRONTEND_API_URL}api/blog/related/${id}?limit=${limit}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch related blogs");
      }

      const result = await response.json();
      return result.data || [];
    } catch (error) {
      console.error("Error fetching related blogs:", error);
      return [];
    }
  };

