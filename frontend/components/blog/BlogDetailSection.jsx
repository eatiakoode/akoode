'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import resolveImageUrl from '@/utils/resolveImageUrl';

const formatBlogDate = (value) => {
  const parsed = value ? new Date(value) : null;
  if (!parsed || Number.isNaN(parsed.getTime())) return 'Recent';
  return parsed.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

const asHtml = (value) => {
  if (!value) return null;
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.join('');
  if (typeof value === 'object') return JSON.stringify(value);
  return null;
};

export default function BlogDetailSection({ blog, relatedBlogs = [] }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    serviceType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.serviceType || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_FRONTEND_API_URL || '';
      const response = await fetch(`${apiUrl}api/enquiry/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        toast.success(result.message || 'Thank you for your message. It has been sent.');
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          serviceType: '',
          message: '',
        });
      } else {
        toast.error(result.message || 'Failed to send enquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  if (!blog) {
    return (
      <div className="vl-blog-details-section sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="blog-others-sidebar" style={{ padding: '0 !important' }}>
                <div className="text-center">
                  <h3>Blog not found</h3>
                  <p>The blog you are looking for might have been removed or is temporarily unavailable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const primaryImage =
    blog.logoimage ||
    (Array.isArray(blog.images) && blog.images.length > 0 && blog.images[0]) ||
    (typeof blog.image === 'string' ? blog.image : null);
  const imageUrl = resolveImageUrl(primaryImage) || '/images/blog/blog1.webp';
  const formattedDate = formatBlogDate(blog.date || blog.publishedOn || blog.createdAt);
  const categoryTitle =
    (blog.blogcategory && (blog.blogcategory.title || blog.blogcategory.name)) || 'BestTechSolution';
  const authorName =
    (blog.author && (typeof blog.author === 'object' ? blog.author.name : null)) || null;
  const metaHeading = blog.metatitle || blog.title;
  const introHeading = blog.introheading;
  const introHtml = asHtml(blog.introcontent);
  const bodyHtml =
    asHtml(blog.body) ||
    asHtml(blog.richdescription) ||
    asHtml(blog.description);
  const galleryImages = (Array.isArray(blog.gallery) ? blog.gallery : []).filter(Boolean);
  if (galleryImages.length === 0 && Array.isArray(blog.images)) {
    galleryImages.push(...blog.images.filter((img) => img && img !== primaryImage));
  }
  const tags = Array.isArray(blog.tags) && blog.tags.length > 0 ? blog.tags : [categoryTitle];
  const commentLabel = blog.commentLabel || '2 Comments';
  
  // Format date for related blogs
  const formatRelatedBlogDate = (value) => {
    const parsed = value ? new Date(value) : null;
    if (!parsed || Number.isNaN(parsed.getTime())) return 'Recent';
    return parsed.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  };
  
  // Limit related blogs to 3
  const displayRelatedBlogs = Array.isArray(relatedBlogs) ? relatedBlogs.slice(0, 3) : [];

  return (
    <div className="vl-blog-details-section sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="blog-others-sidebar" >
              <div className="img1">
                <img src={imageUrl} alt={blog.title || 'image'} className="img-fluid" />
              </div>
              <div className="space32"></div>
              <ul className="list-author">
                <li>
                  <a href="#">#{categoryTitle}</a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/calendar.svg" alt="" /> {formattedDate} <span> | </span>
                  </a>
                </li>
                {authorName && (
                  <li>
                    <a href="#">{authorName}</a>
                  </li>
                )}
              </ul>
              <div className="space24"></div>
              <h2>{blog.title}</h2>
              <div className="space20"></div>
              {introHeading ? <h5 className="mb-2">{introHeading}</h5> : null}
              {introHtml ? (
                <div className="blog-intro" dangerouslySetInnerHTML={{ __html: introHtml }} />
              ) : blog.shortdescription ? (
                <p>{blog.shortdescription}</p>
              ) : null}

              {bodyHtml ? (
                <div className="blog-body" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
              ) : null}

              {galleryImages.length > 0 ? (
                <>
                  <div className="space18"></div>
                  <div className="row">
                    {galleryImages.slice(0, 2).map((img, index) => (
                      <div className="col-lg-6 col-md-6" key={`${img}-${index}`}>
                        <div className="space30"></div>
                        <div className="img1 image-anime">
                          <img src={resolveImageUrl(img) || '/images/blog/blog1.webp'} alt="image" className="img-fluid" />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}


              <div className="space32"></div>
              <h3>Get In Touch Now</h3>
              <div className="space32"></div>
              <div className="contact-boxarea">
                <div className="space8"></div>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-area">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-area">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-area">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-area">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-area">
                        <input
                          type="text"
                          name="serviceType"
                          placeholder="Service Type"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-area">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="space4"></div>
                      <div className="input-area">
                        <button type="submit" className="vl-btn2" disabled={isSubmitting}>
                          {isSubmitting ? 'Sending...' : 'Get Started Now'}{' '}
                          <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


