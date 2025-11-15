import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogDetailSection from '@/components/blog/BlogDetailSection';
import BlogBottomArea from '@/components/blog/BlogBottomArea';
import { getBlogBySlug, getBlogTableData, getRelatedBlogs } from '@/api/frontend/blog';

const extractBlogFromResponse = (response) => {
  if (!response) return null;
  if (Array.isArray(response)) {
    return response[0] ?? null;
  }
  if (response.data) {
    return response.data;
  }
  return response;
};

const extractListFromResponse = (response) => {
  if (!response) return [];
  if (Array.isArray(response)) return response;
  if (response.data && Array.isArray(response.data)) return response.data;
  return [];
};

export async function generateMetadata({ params }) {
  const slug = params?.slug;
  if (!slug) {
    return {
      title: 'Blog Detail - Akoode',
      description: 'Latest insights and stories from the Akoode technology team.',
    };
  }

  try {
    const blogResponse = await getBlogBySlug(slug);
    const blog = extractBlogFromResponse(blogResponse);

    if (!blog) {
      return {
        title: 'Blog Not Found - Akoode',
        description: 'The requested blog could not be found.',
      };
    }

    return {
      title: blog.metatitle || blog.title || 'Blog Detail - Akoode',
      description:
        blog.metadescription ||
        blog.shortdescription ||
        blog.description?.slice(0, 155) ||
        'Learn more about this topic from Akoode.',
      alternates: {
        canonical: `https://www.akoode.com/blog-detail/${blog.slug || slug}`,
      },
      openGraph: {
        title: blog.metatitle || blog.title,
        description:
          blog.metadescription ||
          blog.shortdescription ||
          'Learn more about this topic from Akoode.',
      },
    };
  } catch {
    return {
      title: 'Blog Detail - Akoode',
      description: 'Latest insights and stories from the Akoode technology team.',
    };
  }
}

export default async function BlogDetailPage({ params }) {
  const slug = params?.slug;

  let blog = null;
  let related = [];

  try {
    const blogResponse = await getBlogBySlug(slug);
    blog = extractBlogFromResponse(blogResponse);

    // Fetch related blogs using the blog's _id
    if (blog?._id) {
      related = await getRelatedBlogs(blog._id, 3);
    } else {
      // Fallback: fetch all blogs and filter
      const listResponse = await getBlogTableData();
      const allBlogs = extractListFromResponse(listResponse);
      related = allBlogs.filter((item) => item.slug !== blog?.slug).slice(0, 3);
    }
  } catch (error) {
    console.error('Error loading blog detail:', error);
  }

  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Blog Detail</h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i> <span>Blog Detail</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BlogDetailSection blog={blog} relatedBlogs={related} />
      <BlogBottomArea blogs={related} />

      <Footer />
    </>
  );
}

