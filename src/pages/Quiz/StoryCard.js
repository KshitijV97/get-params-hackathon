import React from 'react';
import './StoryCard.css';

function StoryCard({ story, onSelect }) {
  return (
    <div className="story-card" onClick={onSelect}>
      <h3>{story.title}</h3>
      <p>{story.description}</p>
    </div>
  );
}

export default StoryCard;
