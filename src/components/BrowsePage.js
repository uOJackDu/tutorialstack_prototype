import React from 'react';
import './BrowsePage.css';

const communities = [
  { title: 'English', description: 'Literature & more' },
  { title: 'Math', description: 'Classic' },
  { title: 'Physics', description: 'Let\'s do Physics' },
  { title: 'Gaming', description: 'Games' },
  { title: 'Minecraft', description: 'Play Minecraft' },
  { title: 'Cooking', description: 'Make food' },
  { title: 'Writing', description: 'Write stuff' },
  { title: 'Programming', description: 'Coding' },
  { title: 'Tutorial', description: 'How to write tutorials' },
  { title: 'Organization', description: 'How to organize stuff' },
  { title: 'Fishing', description: 'Yes' },
  { title: 'Computer', description: 'Computer stuff' },
  { title: 'English', description: 'Literature & more' },
  { title: 'Math', description: 'Classic' },
  { title: 'Physics', description: 'Let\'s do Physics' },
  { title: 'Gaming', description: 'Games' },
  { title: 'Minecraft', description: 'Play Minecraft' },
  { title: 'Cooking', description: 'Make food' },
  { title: 'Writing', description: 'Write stuff' },
  { title: 'Programming', description: 'Coding' },
  { title: 'Tutorial', description: 'How to write tutorials' },
  { title: 'Organization', description: 'How to organize stuff' },
  { title: 'Fishing', description: 'Yes' },
  { title: 'Computer', description: 'Computer stuff' },
  { title: 'English', description: 'Literature & more' },
  { title: 'Math', description: 'Classic' },
  { title: 'Physics', description: 'Let\'s do Physics' },
  { title: 'Gaming', description: 'Games' },
  { title: 'Minecraft', description: 'Play Minecraft' },
  { title: 'Cooking', description: 'Make food' },
  { title: 'Writing', description: 'Write stuff' },
  { title: 'Programming', description: 'Coding' },
  { title: 'Tutorial', description: 'How to write tutorials' },
  { title: 'Organization', description: 'How to organize stuff' },
  { title: 'Fishing', description: 'Yes' },
  { title: 'Computer', description: 'Computer stuff' },
];

const BrowsePage = () => {
  return (
    <div className="browse-page">
      <h2>Browse Communities</h2>
      <div className="search-bar">
        <input type="text" placeholder="Search communities..." />
      </div>
      <div className="community-list">
        {communities.map((community, index) => (
          <div key={index} className="community-item">
            <h3>{community.title}</h3>
            <p>{community.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowsePage;
