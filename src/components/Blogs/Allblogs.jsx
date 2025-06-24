import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Allblogs.css";

const Allblogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/blogs`
        );
        if (!res.ok) throw new Error(`Failed to fetch (HTTP ${res.status})`);
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Blog fetch error:", err);
        setError("We couldn't load the content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    const timer = setTimeout(fetchBlogs, 800); // Intentional delay for better UX
    
    return () => clearTimeout(timer);
  }, []);

  const handleBlogClick = (id) => {
    navigate(`/blogs/${id}`, {
      state: { fromBlogList: true } // For potential transition animations
    });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 500);
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         blog.contents.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || blog.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...new Set(blogs.map(blog => blog.category))];

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <div className="loading-animation">
            <div className="loading-spinner"></div>
            <div className="loading-spinner-inner"></div>
          </div>
          <h3 className="loading-title">Curating Premium Content</h3>
          <p className="loading-subtitle">Just a moment while we prepare your reading experience</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-content">
          <div className="error-illustration">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="error-title">Content Unavailable</h3>
          <p className="error-message">{error}</p>
          <button 
            className="retry-button" 
            onClick={() => window.location.reload()}
            aria-label="Retry loading content"
          >
            <span className="button-text">Try Again</span>
            <span className="button-icon">↻</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="all-blogs-container">
      <header className="blogs-header">
        <div className="header-content">
          <h1 className="header-title">
            <span className="title-highlight"></span>Explore Our Insights
          </h1>
          <p className="header-subtitle">
            Discover thought-provoking content from our experts
          </p>
          
          <div className="search-filter-container">
            <div className={`search-bar ${isTyping ? 'typing' : ''}`}>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
                aria-label="Search articles"
              />
              <span className="search-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="search-decoration"></div>
            </div>
            
            <div className="filter-group">
              <div className="filter-select-container">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="category-filter"
                  aria-label="Filter by category"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
                <div className="select-arrow">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="blogs-main">
        <div className="results-header">
          <h2 className="section-title">
            {categoryFilter === "all" ? 'Latest Articles' : `${categoryFilter} Articles`}
          </h2>
          <span className="results-count">
            <span className="count-number">{filteredBlogs.length}</span>
            {filteredBlogs.length === 1 ? ' article' : ' articles'}
          </span>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="empty-state">
            <div className="empty-illustration">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F4F4F5" d="M39.6,-60.2C50.8,-53.7,59.2,-42.3,65.1,-29.5C71,-16.7,74.4,-2.5,73.2,11.9C72,26.3,66.2,40.8,55.2,50.5C44.2,60.2,28,65.1,12.3,67.3C-3.4,69.5,-18.6,68.9,-30.8,61.5C-43,54.1,-52.2,39.9,-59.8,24.5C-67.4,9.1,-73.4,-7.5,-69.9,-21.9C-66.4,-36.3,-53.4,-48.5,-39.2,-54.1C-25,-59.7,-9.6,-58.7,4.5,-65.4C18.6,-72.1,37.2,-86.6,39.6,-60.2Z" transform="translate(100 100)" />
              </svg>
              <div className="empty-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6.25278V19.2528M12 6.25278C10.8324 5.47686 9.24649 5 7.5 5C5.75351 5 4.16756 5.47686 3 6.25278V19.2528C4.16756 18.4769 5.75351 18 7.5 18C9.24649 18 10.8324 18.4769 12 19.2528M12 6.25278C13.1676 5.47686 14.7535 5 16.5 5C18.2465 5 19.8324 5.47686 21 6.25278V19.2528C19.8324 18.4769 18.2465 18 16.5 18C14.7535 18 13.1676 18.4769 12 19.2528" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="empty-title">No Matching Articles</h3>
            <p className="empty-message">
              We couldn't find any articles matching your criteria.
            </p>
            <button 
              className="reset-filters" 
              onClick={() => {
                setSearchQuery("");
                setCategoryFilter("all");
              }}
              aria-label="Reset all filters"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="blog-grid">
            {filteredBlogs.map((post) => (
              <article
                key={post.id}
                className="blog-card"
                onClick={() => handleBlogClick(post.id)}
                aria-labelledby={`post-${post.id}-title`}
              >
                <div className="card-image-container">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="card-image"
                    loading="lazy"
                  />
                  <div className="image-overlay"></div>
                  <span className="category-badge">{post.category}</span>
                </div>

                <div className="card-content">
                  <div className="card-meta">
                    <time className="post-date">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </time>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <h2 id={`post-${post.id}-title`} className="card-title">{post.title}</h2>
                  <p className="card-excerpt">
                    {post.contents?.slice(0, 120)}…
                  </p>
                  <div className="card-footer">
                    <button className="read-more-button">
                      Read More
                      <svg
                        className="arrow-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Allblogs;
