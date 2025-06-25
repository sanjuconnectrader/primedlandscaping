import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Allblogs.css";

const Allblogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/blogs`);
        if (!res.ok) throw new Error(`Failed to fetch (HTTP ${res.status})`);
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        setError("We couldn't load the content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogs();
  }, []);

  const handleBlogClick = (id) => {
    navigate(`/blogs/${id}`);
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
      <div className="loading-state">
        <div className="spinner"></div>
        <p>Loading articles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-state">
        <div className="error-icon">!</div>
        <h3>Content Unavailable</h3>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="blogs-container">
      <header className="blogs-header">
        <h1>Explore Our Insights</h1>
        <p>Discover thought-provoking content from our experts</p>
        
        <div className="search-filter-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="search-icon" viewBox="0 0 24 24">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" />
              <path d="M21 21L16.65 16.65" />
            </svg>
          </div>
          
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="category-filter"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === "all" ? "All Categories" : category}
              </option>
            ))}
          </select>
        </div>
      </header>

      <main className="blogs-main">
        <div className="results-header">
          <h2>{categoryFilter === "all" ? 'Latest Articles' : `${categoryFilter} Articles`}</h2>
          <span>{filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}</span>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="empty-state">
            <svg className="empty-icon" viewBox="0 0 24 24">
              <path d="M12 6.25278V19.2528M12 6.25278C10.8324 5.47686 9.24649 5 7.5 5C5.75351 5 4.16756 5.47686 3 6.25278V19.2528C4.16756 18.4769 5.75351 18 7.5 18C9.24649 18 10.8324 18.4769 12 19.2528M12 6.25278C13.1676 5.47686 14.7535 5 16.5 5C18.2465 5 19.8324 5.47686 21 6.25278V19.2528C19.8324 18.4769 18.2465 18 16.5 18C14.7535 18 13.1676 18.4769 12 19.2528" />
            </svg>
            <h3>No Matching Articles</h3>
            <p>We couldn't find any articles matching your criteria.</p>
            <button onClick={() => {
              setSearchQuery("");
              setCategoryFilter("all");
            }}>
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
              >
                <div className="card-image-container">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="card-image"
                    loading="lazy"
                  />
                  <span className="category-badge">{post.category}</span>
                </div>

                <div className="card-content">
                  <div className="card-meta">
                    <time>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </time>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p className="card-excerpt">
                    {post.contents?.slice(0, 120)}…
                  </p>
                  <button className="read-more-button">
                    Read More
                    <svg className="arrow-icon" viewBox="0 0 24 24">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                    </svg>
                  </button>
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