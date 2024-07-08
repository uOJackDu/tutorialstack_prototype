import React, { useState } from 'react';
import './TutorialDetailPage.css';
import { FaThumbsUp, FaComment, FaBookmark } from 'react-icons/fa';

const initialComments = [
  { user: 'David', comment: 'Very helpful, thank you!' },
  { user: 'John', comment: 'I found this confusing.' }
];

const TutorialDetailPage = () => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { user: 'anonymous', comment: newComment }]);
      setNewComment('');
    }
  };

  return (
    <div className="tutorial-detail-page">
      <h2>How to turn on your computer</h2>
      <p>Many people may have trouble turning on their computer. Maybe you don’t know how to turn on your computer, but don’t worry, today, I’ll teach you how to turn on your computer.</p>
      <p>First, you usually need to press the button that turns on your computer. Then, your computer should be turned on.</p>
      <div className="feedback">
        <span><FaThumbsUp /> 100</span>
        <span><FaBookmark /> 100</span>
      </div>
      <div className="comments-section">
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <p><strong>{comment.user}</strong>: {comment.comment}</p>
          </div>
        ))}
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Write a comment..."
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TutorialDetailPage;
