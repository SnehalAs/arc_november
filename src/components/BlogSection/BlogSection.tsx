import React from "react";
import "./BlogSection.css";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  tag:string;
}

const blogData: BlogCardProps[] = [
  {
    image: "src/assets/blogs.png",
    title: "What is Ad Exposure and Why It Matters?",
    description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    tag:"Marketing"
  },
  {
    image: "src/assets/blogs1.png",
    title: "What is Ad Exposure and Why It Matters?",
    description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    tag:"Bussiness"
  },
  {
    image: "src/assets/blogs2.png",
    title: "What is Ad Exposure and Why It Matters?",
    description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    tag:"Finance"
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="blog-section">
      <div className="header">
        <h1 className="head">Blogs</h1>
        <p className="para">Explore the impact we’ve delivered</p>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="blog-cards-container">
        {blogData.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt="Blog thumbnail" />
            <div className="content">
              <span className="tag">{blog.tag}</span>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <a href="/" className="read-more">
                Read Full Article →
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="control-btn">◀</button>
        <button className="control-btn">▶</button>
      </div>
    </section>
  );
};

export default BlogSection;
