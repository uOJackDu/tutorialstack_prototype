import React from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import './HomePage.css';

const tutorials = [
  { author: 'Sam', title: 'How to turn on your computer', likes: 100, comments: 10, tags: ['Beginner', 'Hardware'] },
  { author: 'Kevin', title: 'How to turn off your computer', likes: 200, comments: 20, tags: ['Beginner', 'Hardware'] },
  { author: 'Bob', title: 'How to install Python', likes: 300, comments: 30, tags: ['Software', 'Programming'] },
  { author: 'Sam', title: 'How to turn on your computer', likes: 100, comments: 10, tags: ['Beginner', 'Hardware'] },
  { author: 'Kevin', title: 'How to turn off your computer', likes: 200, comments: 20, tags: ['Beginner', 'Hardware'] },
  { author: 'Bob', title: 'How to install Python', likes: 300, comments: 30, tags: ['Software', 'Programming'] },
  { author: 'Sam', title: 'How to turn on your computer', likes: 100, comments: 10, tags: ['Beginner', 'Hardware'] },
  { author: 'Kevin', title: 'How to turn off your computer', likes: 200, comments: 20, tags: ['Beginner', 'Hardware'] },
  { author: 'Bob', title: 'How to install Python', likes: 300, comments: 30, tags: ['Software', 'Programming'] },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Home</h2>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="tutorial-list">
        {tutorials.map((tutorial, index) => (
          <Link to="/tutorial" key={index} className="tutorial-item">
            <h3>{tutorial.title}</h3>
            <div className="tags">
              {tutorial.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
            <div className="tutorial-info">
              <span className="author">{tutorial.author}</span>
              <div className="like-comment">
                <span><FaThumbsUp /> {tutorial.likes}</span>
                <span><FaComment /> {tutorial.comments}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
