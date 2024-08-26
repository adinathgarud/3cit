import React from 'react';
import './Blog.css';
//import blogImage from '../../src/assets/2024-08-02.png'; // Adjust the path based on your file structure
import { Helmet } from 'react-helmet';
const Blog = () => {
  return (
    <>
    <Helmet>
                <title> Blog - 3C IT Solutions & Telecoms (India) Private Limited</title>
                <meta charSet='utf-8' />
                <link rel="canonical" href="https://www.3citsolution.com/3cit" />
            </Helmet>
      <div className="blog-heading">
        <h1>Blog</h1>
      </div>
      <div className="blog-content">
        <div className="left-blog-content">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
          <div className="recent-posts">
            <h2>Recent Posts</h2>
          </div>
          <div className="recent-comments">
            <h2>Recent Comments</h2>
            <p>No comments to show.</p>
          </div>
        </div>
        <div className="right-blog-content">
          <div className="archives">
            <h2>Archives</h2>
            <p>No archives to show.</p>
          </div>
          <div className="categories">
            <h2>Categories</h2>
            <p>No categories</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
