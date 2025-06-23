import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Home/Navbar/Navbar";
import Footer from "../components/Home/Footer/Footer";
import "./BlogDetails.css";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Blog post not found');
        }
        const data = await response.json();
        setBlogPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="loading-container">
          <div className="loading-animation">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading article...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="error-container">
          <div className="error-content">
            <div className="error-illustration">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="error-title">Article Unavailable</h3>
            <p className="error-message">{error}</p>
            <div className="error-actions">
              <button className="btn-primary" onClick={() => navigate('/')}>
                Back to Home
              </button>
              <button className="btn-secondary" onClick={() => window.location.reload()}>
                Try Again
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!blogPost) {
    return (
      <>
        <Navbar />
        <div className="not-found-container">
          <div className="not-found-content">
            <div className="not-found-illustration">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="not-found-title">Article Not Found</h3>
            <p className="not-found-message">
              The article you're looking for doesn't exist or may have been removed.
            </p>
            <button className="btn-primary" onClick={() => navigate('/')}>
              Browse All Articles
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="blog-detail-container">
        <article className="blog-article">
          {/* Article Header */}
          <header className="article-header">
            <div className="breadcrumb">
              <button onClick={() => navigate('/')} className="breadcrumb-link">
                ← All Articles
              </button>
              <span className="breadcrumb-divider">/</span>
              <span className="breadcrumb-current">{blogPost.category}</span>
            </div>
            
            <h1 className="article-title">{blogPost.title}</h1>
            
            <div className="article-meta">
              <div className="meta-group">
                <span className="meta-label">Published</span>
                <time className="meta-value">
                  {new Date(blogPost.createdAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
              </div>
              
              <div className="meta-group">
                <span className="meta-label">Category</span>
                <span className="meta-value category-tag">{blogPost.category}</span>
              </div>
              
              <div className="meta-group">
                <span className="meta-label">Reading Time</span>
                <span className="meta-value">{blogPost.readTime}</span>
              </div>
              
              <button 
                className={`bookmark-button ${isBookmarked ? 'bookmarked' : ''}`}
                onClick={toggleBookmark}
                aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 17L5 21V5Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </header>

          {/* Article Image */}
          <figure className={`article-image ${isImageLoaded ? 'loaded' : ''}`}>
            <img 
              src={blogPost.img} 
              alt={blogPost.title} 
              loading="lazy"
              onLoad={handleImageLoad}
            />
            {!isImageLoaded && <div className="image-placeholder"></div>}
            <figcaption className="image-caption">Featured image for this article</figcaption>
          </figure>

          {/* Article Content */}
          <div className="article-content">
            {blogPost.excerpt && (
              <div className="article-excerpt">
                <p>{blogPost.excerpt}</p>
                <div className="excerpt-divider">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            
            <div 
              className="article-html-content" 
              dangerouslySetInnerHTML={{ __html: blogPost.contents }} 
            />
            
            {blogPost.tags?.length > 0 && (
              <div className="article-tags">
                {blogPost.tags.map((tag, index) => (
                  <span key={index} className="article-tag">#{tag}</span>
                ))}
              </div>
            )}
          </div>

          {/* Article Footer */}
          <footer className="article-footer">
            <div className="article-actions">
              <button 
                className="btn-secondary" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Back to Top
              </button>
              <div className="social-share">
                <span className="share-label">Share:</span>
                <button className="share-button twitter">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="share-button linkedin">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="share-button facebook">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="author-section">
              <div className="author-avatar">
                <span>👤</span>
              </div>
              <div className="author-info">
                <h4 className="author-name">Article Author</h4>
                <p className="author-bio">Expert in this field with years of experience</p>
              </div>
            </div>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetail;